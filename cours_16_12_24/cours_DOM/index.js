
// ciblage des noeux du DOM grace au querySelector et au getElementById
// le querySelector est un selecteur de CSS

const bonneReponse = document.querySelector(".bonne_reponse");// ne pas oublier le "point"
const mauvaiseReponse = document.querySelector(".mauvaise_reponse");
const btn1 = document.querySelector("#btn_1");// ne pas oubllier le "#"
// const btn2 = document.querySelector("#btn_2");
const btn2 = document.getElementById("btn_2");// lorsqu'on utilise le getElementById on a pas besoin du # car il cible directement une ID
console.log(btn2);

btn1.addEventListener("click", () => {
    bonneReponse.style.display = "block";
    bonneReponse.style.color = "green";

    bonneReponse.classList.add("show_response")
})
btn2.addEventListener("click", () => {
    mauvaiseReponse.style.display = "block";
    mauvaiseReponse.style.color = "red";
})
