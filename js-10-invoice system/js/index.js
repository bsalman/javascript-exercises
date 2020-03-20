window.onload=()=>{
let proNamInput = document.querySelector(".product>div:nth-child(1)>input")
let proPricInput =document.querySelector(".product>div:nth-child(2)>input")
let quantityInput = document.querySelector(".product>div:nth-child(3)>inpt")
let totalSpan=document.querySelector(".document>div:nth-child(4)>span")







let newProductA =document.querySelector("#newProduct")
console.log(newProductA);

newProductA.addEventListener('click',function (e) {
    e.preventDefault()
    creatNewProduct()})

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