let array1=[-5,1,0,10]
let array2=[1,6,7,0,0]


function findTheSame(arr1,arr2) {
    let storeg =[]
    for (let i = 0; i < arr1.length; i++) {
              for (let x = 0; x < arr2.length; x++) {
                  if (arr1[i] == arr2[x] && storeg.indexOf(arr1[i]) == -1 ){
                      storeg.push(arr1[i])
                  }

           
           
       }
        
    }
   return storeg 
}

document.write (findTheSame(array1,array2))