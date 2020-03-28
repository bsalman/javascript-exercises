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
//creating color select list 
    let colorList =document.createElement('select')
    let firstColorOpt=  document.createElement('option') 
        firstColorOpt.innerText='select color'
        firstColorOpt.setAttribute('value','')
        colorList.append(firstColorOpt)
        //creating colorlist Options using forEach after creating colorArr
    let colorArr=["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown"]
        colorArr.forEach(element => {
    let colorOpt=  document.createElement('option') 
        colorOpt.innerText=element
        colorOpt.setAttribute('value',element)
        colorList.append(colorOpt)
    });
//creating catigoryList 
    let categoryList = document.createElement('select')
    let firstcategoryOpt=document.createElement('option')
        firstcategoryOpt.innerText='select Category'
        firstcategoryOpt.setAttribute('value','')
        categoryList.append(firstcategoryOpt)

     let categoryArr=['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music' ]   
         categoryArr.forEach(element => {
         categoryOpt=document.createElement('option')
         categoryOpt.innerText=element
         categoryOpt.setAttribute('value',element)
         categoryList.append(categoryOpt)
     }); 

//creating searchBtn
    let searchBtn =document.createElement('button')
    searchBtn.innerText = 'search'

    
    div1.append(searshInput)
    div1.append(colorList)
    div1.append(categoryList)
    div1.append(searchBtn)
    div1.append(div3)
    containerDiv.append(div1)
    containerDiv.append(div2)

searchBtn.addEventListener('click',function (e) {
  let keyWord=searshInput.value
   
   //calling fotoSearch
    fotoSearch(keyWord,div2,div3,1,colorList,categoryList)

    
})
    
}
async function fotoSearch(keyWord,imgDivContainer,btnContainer,pageNume,colorElement,categoryElement) {
 // i searched in googel for this quastion (Get selected value in dropdown list using JavaScript) to get this result   

 
    let selectedColor=colorElement.options[colorElement.selectedIndex].value
    let colorParameter=''
       if (selectedColor){
         colorParameter='&colors='+selectedColor
       }

    let selesctedCategory= categoryElement.options[colorElement.selectedIndex].value
    let categoryParameter=''
    if(selesctedCategory){
        categoryParameter='&category'+selesctedCategory
    }


//geting data using fetch 
let response =await fetch('https://pixabay.com/api/?key=12000491-41fc68d8c365df909e022ceb6&q='+keyWord+'&page='+pageNume+colorParameter+categoryParameter)
if (response.status==200){
    let data =await response.json()
    console.log(data);

    let num = data.totalHits /20
    let btnNumber= Math.ceil(num)
    // console.log(btnNumber);
    btnContainer.innerHTML=''
    imgDivContainer.innerHTML=''
    
    for (let i = 0; i < btnNumber ; i++) {
        let pagBtn =document.createElement('button')
        pagBtn.innerText='page'+(i+1)
        btnContainer.append(pagBtn)
//to mack the page non klickapel   
    if (pageNume== i+1){pagBtn.disabled=true}
//calling the seame function evrytime the user klick one of page Buttons
        
     pagBtn.addEventListener('click',function () {
     fotoSearch(keyWord,imgDivContainer,btnContainer,i+1,colorElement,categoryElement)
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
