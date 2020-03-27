window.onload =()=>{
    
    
    creatElement('#container')
   
    
    
}

function creatElement(divId) {
//get element by id or by class using queryselector 
    let  containerDiv =document.querySelector(divId)
//add class to containerDiv    
    containerDiv.classList.add('container')
//creating div1    
    let div1 =document.createElement('div')
//add class (controlContainer)to div1
    div1.classList.add('controlContainer')
//creating div 2
   let div2= document.createElement('div')
//add classist to div2(imgContainer)
   div2.classList.add('imgContainer')
// creating div3
   let div3=document.createElement('div')
   div3.classList.add('pageBtns')
//creating search input
    let searshInput=document.createElement('input')
    searshInput.setAttribute('type','text')
    searshInput.setAttribute('placeholder','search for ')

//creating searchBtn
    let searchBtn=document.createElement('button')
    searchBtn.innerText = 'search'

    
    div1.append(searshInput)
    div1.append(searchBtn)
    div1.append(div3)
    containerDiv.append(div1)
    containerDiv.append(div2)

searchBtn.addEventListener('click',function (e) {
  let keyWord=searshInput.value
    //calling fotoSearch
    fotoSearch(keyWord,div2,div3,1)

    
})
    
}
async function fotoSearch(keyWord,imgDivContainer,btncontainer,pageNume) {


//geting data using fetch 
let response =await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyWord+'&page='+pageNume)
if (response.status==200){
    let data =await response.json()
    console.log(data);

    let num = data.totalHits /20
    let btnNumber= Math.ceil(num)
    // console.log(btnNumber);
    btncontainer.innerHTML=''
    imgDivContainer.innerHTML=''
    
    for (let i = 0; i < btnNumber ; i++) {
        let pagBtn =document.createElement('button')
        pagBtn.innerText='page'+(i+1)
        btncontainer.append(pagBtn)
//to mack the page non klickapel   
    if (pageNume== i+1){pagBtn.disabled=true}
//calling the seame function evrytime the user klick one of page Buttons
     pagBtn = document.addEventListener('click',function () {
     fotoSearch(keyWord,imgDivContainer,btncontainer,i+1)
    })
    }
 console.log(data.hits);
 
    data.hits.forEach(element => {
        
        
        let image =document.createElement('img')
        image.setAttribute('src',element.previewURL)
        image.setAttribute('alt','Image Not found')
        let aLink =document.createElement('a')
        aLink.setAttribute('href',element.largeImageURL)
        aLink.setAttribute('target','_blank')

        aLink.append(image)
        imgDivContainer.append(aLink)
    });







}



    
// for (let i = 0; i < 20; i++) {
//     let image =document.createElement('img')
//         image.setAttribute('src','./img/dummy.png')
//         divname.append(image)

    
// }
    
}
