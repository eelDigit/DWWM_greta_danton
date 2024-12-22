
// ciblage des noeux du DOM grace au querySelector et au getElementById
// le querySelector est un selecteur de CSS

const bonneReponse = document.querySelector(".bonne_reponse");// ne pas oublier le "point"
const mauvaiseReponse = document.querySelector(".mauvaise_reponse");
const btn1 = document.querySelector("#btn_1");// ne pas oubllier le "#"
// const btn2 = document.querySelector("#btn_2");
const btn2 = document.getElementById("btn_2");// lorsqu'on utilise le getElementById on a pas besoin du # car il cible directement une ID
console.log(btn2);

btn1.addEventListener("click", () => {
    // bonneReponse.style.display = "block";
    // bonneReponse.style.color = "green";
    btn2.disabled = true;// permet de désactiver le button 2
    
    bonneReponse.classList.add("show_response");
})
btn2.addEventListener("click", () => {
    mauvaiseReponse.style.display = "block";
    mauvaiseReponse.style.color = "red";
    btn1.disabled = true;
})



// mousmove ______________________________
 
const circle = document.querySelector(".mousemove");

// console.log(circle); // permet de verifier le bon ciblage 

window.addEventListener("mousemove", (e)=> {

//     //e correspont a event (pour les evenements)
console.log(" X: ",e.pageX);
console.log("Y: ",e.pageY);

circle.style.left = e.pageX + "px";
circle.style.top = e.pageY + "px";

// circle1.style.left = e.pageX + "px";
// circle1.style.top = e.pageY + "px";

// circle2.style.left = e.pageX + "px";
// circle2.style.top = e.pageY + "px";

});
//  Ajout evenement mousedown / mouseup_______________

// window.addEventListener("mousedown", ()=> {
//  circle.style.transform = "scale(2)translate(-25%, -25%)  "
//  circle.style.borderColor = "red";
 
// })
// window.addEventListener("mouseup", ()=> {
//     circle.style.transform = "scale(1)translate(-50%, -50%)  "
//     circle.style.borderColor = "yellow";

// })


// kypress event ______________________________

const keypressContainer  = document.querySelector(".keypress");
const key = document.getElementById("key");


document.addEventListener('keypress' , (e) => {

key.textContent += e.key;
// console.log(key.textContent += e.key);
if (e.key === "j"){
    keypressContainer.style.background ="yellow";
}else if (e.key === "b") {
    keypressContainer.style.background ="blue";
}else if (e.key === "m"){
    music();
}else if(e.key === "s") {
    musicStop()
}else {
    keypressContainer.style.background ="tomato";
}
})


// creation de la function pour le son
const audio = new Audio();
const music = () => {
    audio.src = "./sound/summer.mp3";
    audio.play();
}
const musicStop = () => {
    // audio.src = "./sound/summer.mp3";
    audio.pause();
}


// form-event _____________________________________________


const inputName = document.getElementById('inputName');
const inputPrenom = document.getElementById('inputPrenom');
const select = document.querySelector("select");
const form = document.querySelector("form");
const formData = document.querySelector('.form_data');

let nom = "";
let prenom= "";
let langage = "";

inputName.addEventListener("input", (e) => {
     nom = e.target.value;
   
})

inputPrenom.addEventListener("input", (e) => {
     prenom = e.target.value;
    
})

select.addEventListener("input", (e) => {
langage = e.target.value;

})

form.addEventListener('submit' , (e) => {

e.preventDefault(); //empêche le comportement par defaut du formulaire

if (cgv.checked) {
    formData.innerHTML = ` 
<h3> Nom : ${nom} </h3>
<h3> Prénom : ${prenom} </h3>
<h3> Langage : ${langage} </h3>

`
}else {
    alert('Veuillez remplir les CGV');
}


})

// scroll-event _____________________________________________

const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
// console.log(window.scrollY);

if(window.scrollY > 120) {
   nav.style.top = "0";
}else {
    nav.style.top = "-50";

}

})
// exercice DOM___________________________________________
// N° 1

/**
 * 
 * Instructions :
Crée l'interface :

Trois boutons représentant des couleurs : Bleu, Rouge, et Vert.
Un bouton supplémentaire intitulé "Désactiver les choix".
Un paragraphe vide qui affichera le message de réponse.
Règles du jeu :

Si l'utilisateur clique sur le bouton Vert, un message "Bonne réponse ! s'affiche en vert.
Si l'utilisateur clique sur Bleu ou Rouge, un message "Mauvaise réponse !"" s'affiche en rouge.

Lorsque l'utilisateur clique sur le bouton "Désactiver les choix",
tous les boutons de choix doivent être désactivés, ainsi que le bouton lui-même.
Un message "Les choix sont désactivés" s'affiche en orange.
Exemple d'affichage attendu :

Trois boutons : Bleu, Rouge, et Vert.
Un bouton "Désactiver les choix".
Un message dynamique qui change en fonction des actions de l'utilisateur.
 */