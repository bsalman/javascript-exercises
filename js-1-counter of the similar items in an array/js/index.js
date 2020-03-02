let array =[1,5,5,6,1,1,5,7,8,-1]


function countTheSimiler(arr,num) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num){
            result=result+1,console.log(arr[i])
        }
        
    }
    return result
    
}

document.write(countTheSimiler(array,5)+'<br>')


//using forEach

function countTheSimiler1(arr1,num1) {
    let result1 = 0 
    array.forEach(item => {
        if (item == num1) {
           result1++,console.log(item) 
            
        }
        
    })
    return result1
    
}
document.write(countTheSimiler1(array,1)+'<br>')