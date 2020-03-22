
window.onload =()=>{
    
    // geting data using fetch and promis
    let icon= document.querySelector('.div1>div:nth-child(1)')
    let jockId = document.querySelector('.div1>div:nth-child(2)')
    let jock =document.querySelector('.div1>div:nth-child(3)')
    
    let getPromis =fetch('https://api.chucknorris.io/jokes/random')
console.log(getPromis);

getPromis.then((response)=>{
    if (response.status ==200){ 
        let jsonPromis = response.json()
        jsonPromis.then((data)=>{ 
            console.log(data); 
            console.log(data.id);
            console.log(data.value);
           
            icon.innerHTML='<img src="'+data.icon_url+'" >'
            jockId.innerText='jock id:'+ data.id
            jock.innerText=data.value
            
        }).catch((error=>{
            console.log(error);
            
        })
        )
    
    
    
    }
})}



 
 

