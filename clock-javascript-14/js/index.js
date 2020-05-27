
window.onload = function () {
let secondsH = document.querySelector('#second')
let minuteH=document.querySelector('.minuten')
let houerH = document.querySelector('.hour')


function setDate() {
  
    let now = new Date();
    let second = now .getSeconds()
    let secondToDegres= ((second/60)*360)+90
    secondsH.style.transform =`rotate(${secondToDegres}deg)`
    let minuten=now.getMinutes()
    let minutenToDeg = ((minuten/60)*360)+90
    minuteH.style.transform=`rotate(${minutenToDeg}deg)`
    let houers = now.getHours()
    let houersToDeg = ((houers/60)*360)+90
    houerH.style.transform = `rotate(${houersToDeg}deg)`
}

let clockInterval=setInterval(() => {
  setDate()
}, 1000);

    
}