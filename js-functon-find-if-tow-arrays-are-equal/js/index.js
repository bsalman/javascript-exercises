let array1=[-5,1,0,10]
let array2=[-5,1,0,10,0]

function checkIfEqual(arr1,arr2) {
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false
            }
            
        }

        return true
    }
   else{ return false} 
}

document.write(checkIfEqual(array1,array2))