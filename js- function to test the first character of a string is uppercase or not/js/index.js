let str = 'Hello world '
let result = false
//  console.log(str.slice(str.indexOf(' '),str.indexOf(' ')+2))
function checkTheFirstchrUpper(text) { 


// let i = text.indexOf(' ')
// let x = text.slice(i,i+2)
// if ( x != x.toLowerCase()  ){return result =true}
// else{
//     return result = false
// }
if (text.charAt(0)===text.charAt(0).toUpperCase()) {
    return result = true

    
}
else { return result =false}
    
}
document.write(checkTheFirstchrUpper(str))