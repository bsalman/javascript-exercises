let arr =[1,4,5,6,3,0,0,6,2,1,9,5,6]
function removeDupel(array) {
 let result =[]
 array.forEach(item => { if (result.indexOf(item)== -1){
     result.push(item)
 }
     
 })  
 return result 
}
document.write(removeDupel(arr))