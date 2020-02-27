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

document.write (findTheSame(array1,array2)+'<br>')

// andere Methode


function findTheSame2 (ar1,ar2) {
    let lager =[]
    ar1.forEach(item => { if (ar2.indexOf(item) !==-1 && lager.indexOf(item)==-1)
       { lager.push(item)}
        
    });
    return lager
    
}
document.write (findTheSame2(array1,array2))