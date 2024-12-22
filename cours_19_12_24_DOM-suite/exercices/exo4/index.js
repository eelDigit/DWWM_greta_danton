const output = document.querySelectorAll('li');

output.forEach((elm) => {
elm.addEventListener("click",  ( )=> {
    
    let newElm = prompt("Veuillez faire les modifications")
    elm.innerText = newElm;

})
} )