//  onclick ___________________

// document.body.onclick = function () {
//     console.log("click !");
// }

//  Ajout du onclick___________________________
// en fonction fleche 
document.body.onclick = ()=> {
    console.log("click.... !");
}

document.body.onclick = ()=> {
    console.log("clack.... !");
}



function test(){
    console.log("test");
}
function test1(){
    console.log("je suis le text 1");
    console.log("je suis le text 2");
    console.log("je suis le text 3");
}


document.body.addEventListener('click', ()=> {
    console.log('click 1');
})
document.body.addEventListener('click', ()=> {
    console.log('click 2');
})

document.body.addEventListener('click',test );
// document.body.addEventListener('click',test1 );

//  load event____________________________
window.addEventListener('load', ()=> {
    console.log("doc charger ");
})

// ____[BOM ]_browser objet model_______________________________

console.log(window.innerHeight); // hauteur de fenetre
console.log(window.innerWidth); // largeur de la fenetre
console.log(window.scrollY); // hauteur du scroll sur l'axe des Y 

const buttonOpen = document.querySelector('.new_page');
buttonOpen.addEventListener('click', ()=> {
    window.open("https://fr.wikipedia.org/wiki/Wiki", "height= 200px  width= 200px");

})


// autre exemple : 
// window.close();
// window.alert("hello !")


// const buttonOpen= document.querySelector(".new_page");
//    buttonOpen.addEventListener("click",()=>{
//     window.open("https://noname-spirit.com/", "height=200px" , "width=200px")
//    })

const btnPrompt = document.querySelector('.prompt');
const containerAnswer = document.querySelector('.container_answer');
let answer ;

btnPrompt.addEventListener('click' , () => {
answer = prompt("entrer votre nom");
containerAnswer.innerHTML = `
<h4>  Bravo : ${answer} , vous avez gagner </h4>

`
}) 


// setTimout _____________________
setTimeout( ()=> {
    containerAnswer.style.borderRadius= "20px"
}, 2000 ) // temps en millisecond

// let interval =  setInterval( ()=> {
//     box.innerHTML += `
//     <div class="box"> 1</div>
//     `  
// },5000);


// containerAnswer.addEventListener('click' , ()=> {

//     clearInterval(interval);
// })
// autre exemple 
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
// console.log(navigator.userAgent);


document.addEventListener('click', (e)=> {

    e.target.remove();
})



