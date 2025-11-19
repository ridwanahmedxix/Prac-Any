const body = document.querySelector("body")

 function setColor(params) {
    
    body.style.backgroundColor = params
 }
 
 function randomColor() {
   const red = Math.round(Math.random()*256)
   const green = Math.round(Math.random()*256)
   const blue = Math.round(Math.random()*256)
   const color = ` rgb( ${red} , ${green} , ${blue} ) ` ;
   body.style.backgroundColor = color ;
 }