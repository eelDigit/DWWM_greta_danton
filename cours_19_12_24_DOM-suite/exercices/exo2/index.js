
const button = document.querySelector('button');
console.log(button);
button.addEventListener('click', ()=> {

for(i=0 ; i<11; i++ ) {
    document.body.innerHTML += `
    <p>  3 x ${i} = ${i * 3 }   </p>
    `
}

})