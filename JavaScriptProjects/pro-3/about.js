const body = document.querySelector("body") ;

function setColor(cName) {
    document.body.style.backgroundColor = cName ;
}

function randomC(){
    const red = Math.round(Math.random()*256)
    const green = Math.round(Math.random()*256)
    const blue = Math.round(Math.random()*256)
    const color = `rgb(${red} ,${green} ,${blue} )` ;
    document.body.style.backgroundColor = color ;
}

