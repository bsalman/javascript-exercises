
let arr1 =[1,3,5]

function pairs (arr) {
    let result = 0;
    let neuArr=[]
    for (let i = 0; i < arr.length; i++)
        {
        for (let x = i+1; x < arr.length; x++)
            {
              // if (arr[i] % arr[x] != 0 || arr[x] % arr[i] != 0)
                //{

                if(neuArr.indexOf(arr[i],arr[x]!=-1)){
                result++, neuArr.push(arr[i],arr[x])
                }
         }
      }
    
  document.write(result+' <br>'+neuArr)
}


pairs(arr1)