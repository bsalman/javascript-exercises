window.onload =()=>{
   let container=document.querySelector('.container')
   let inputs= document.querySelectorAll('.controls input') 
   let propertychanging =function () {
       //dataset geve an object with all prperty of the html element
    let suffix= this.dataset.sizing||'';
    console.log(this.name);
    
    container.style.setProperty(`--${this.name}`,this.value+suffix)
   }
  
  inputs.forEach(input => { 
      input.addEventListener('change',propertychanging)
      input.addEventListener('mousemove',propertychanging)
      }
  );
}