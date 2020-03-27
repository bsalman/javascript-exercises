window.onload=()=>{
let proNamInput = document.querySelector(".product>div:nth-child(1)>input")
let proPricInput =document.querySelector(".product>div:nth-child(2)>input")
let quantityInput = document.querySelector(".product>div:nth-child(3)>inpt")
let totalSpan =document.querySelector(".product>div:nth-child(4)>span")

proNamInput.addEventListener('keyup',function (e) {
    if (e.which ==13){
        proPricInput.focus()
    }
})
// let totalSpan=document.querySelector(".document>div:nth-child(4)>span")
let newProductA =document.querySelector("#newProduct")
newProductA.addEventListener('click',function (e) {
    e.preventDefault()
    creatNewProduct()
})


}




function setEvent(eventName,triggerElement,priceElement,quantityElement,result,elmentType) {
    //add eventlistener to each one of input (price ,quantity) and give the total price inside the total span
    triggerElement.addEventListener(eventName,function (e) {
   let price= parseFloat(priceElement.value)
   let howMany= parseFloat(quantityElement.value)
   result.innerText =(price*howMany)+'  Euro'

    // to add alle the total spans value in one final result
    // wir müssen ein Array von alle spans definieren dann machen wir for loop or forEach um die Ergebnisse zu  addieren und '   Euro' zu löschen    
    let spanArr = document.querySelectorAll('.product>div>span') 
    let storage =0
    spanArr.array.forEach(span => {
        //'  Euro'  löschen 
        let innerValue =span.innerText.replace('  Euro','')
        let result= parseFloat(innerValue)
        storage +=result
        
    });
 let sumTotal = document.querySelector('.sumTotal')
 sumTotal.innerText= storage+'  Euro'

 //um die mauszeiger (cursor))von price Input zu quantity Input sich zu bewegen sobald inter Taste zu druken
 if(elmentType =='price'&& eventName=='keyup'){
    quantityElement.focus()
 }
 //um  die mauszeiger von  aktuellen input zu dem Nächsten bewegen
 if (elmentType =='quantity'&& eventName=='keyup'){
     if (e.which==13){
         
     }

 }
// .trim()  Remove whitespace from both sides of a string:





    })  
   


}





function creatNewProduct() {
    
        let productsDiv =document.querySelector('.products')

// creating product div dinamikly 
             let newProDiv =document.createElement('div')
             newProDiv.setAttribute('class','product')

// creating product name input  dinamikly and add class
             let div0 =document.createElement('div')
             let newProNamInput=document.createElement('input')
             newProNamInput.setAttribute('type','text')
             
// appending product name input to the product div
             div0.append(newProNamInput)
             newProDiv.append(div0)

// creating product Price input  dinamikly and add class+ value +min
            let div1 =document.createElement('div')
            let newProPricInput=document.createElement('input')
            newProPricInput.setAttribute('type','number')
            newProPricInput.setAttribute('value','0')
            newProPricInput.setAttribute('min','0')
            
// appending product price input to the product div
            div1.append(newProPricInput)
            newProDiv.append(div1)
// creating product quantity input  dinamikly and add class+ value +min
            let div2 =document.createElement('div')
            let newQuantityInput=document.createElement('input')
            newQuantityInput.setAttribute('type','number')
            newQuantityInput.setAttribute('value','0')
            newQuantityInput.setAttribute('min','0')
// appending product quantity input to the product div
            div2.append(newQuantityInput)
            newProDiv.append(div2)
//creating Total span  dinamikly
            let div3 =document.createElement('div')
            let newTotalSpan = document.createElement('span')
            newTotalSpan.innerText =' 0 Euro'
//appending   Total span  to the product div  
            div3.append(newTotalSpan)
            newProDiv.append(div3)


//appending   newProDiv to the product div   
             productsDiv.append(newProDiv)


    
}