
// les structures de contrôles___________________________

let x = 3;
let y = "20";

if (x < y) {
    console.log("x est inferieur a y");
}else {
    console.log("x est supérieur a y");
}

// if( x<= )
// if( x>= )

if (x) {
    console.log("x existe");
}
if (!x) {
    console.log("x n'existe pas ");
}
if (x === y){
    console.log("x est égal a y");
}else {
    console.log("x n'est pas égale a y");
}
/*
avec un === on test a la fois si le type est le même 
et si  le valeur est la même.
*/

/*
avec un == on test si la valeur est la même(on ne test pas le type)
*/



if (x != y){
    console.log("x est égal a y");
}else {
    console.log("x n'est pas égale a y");
}

if(x===y || x > y) {
    console.log(" youpi !");
}else {
    console.log('faux');
}


if(x===y && x >= y) {
    console.log(" youpi !");
}else {
    console.log('faux');
}

if (x==y && x > 3 || y > 8 ){
    console.log("true");
}else{
    console.log("false");
}
//  ternaire________________
// on pose une question : 
// x est-il égal a y ? si oui console.log("true")
// sinon :  console.log("false")
x == y ? console.log("true") : console.log("false");

// exo1_conditions____________________________
// Demande l'âge d'une personne (via une variable age =25 ).
// Vérifie les cas suivants :
// Si l'âge est inférieur à 0, affichez : "Âge invalide".
// Si l'âge est entre 0 et 12 ans, affichez : "Tu es un enfant.".
// Si l'âge est entre 13 et 17 ans, affichez : "Tu es un adolescent.".
// Si l'âge est entre 18 et 64 ans, affichez : "Tu es un adulte.".
// Si l'âge est supérieur ou égal à 65 ans, affichez : "Tu es un senior.".

let age = 25;
if (age < 0 ) {
    console.log("age invalide");
}else if(age <= 12)  {
    console.log("Tu es un enfant");
}else if (age <= 17){
    console.log("Tu es un adolescent.");
}else if ( age <= 64) {
    console.log("Tu es un adulte.");
}else {
    console.log("Tu es un senior.");

}
/*
exo_2
Définit une variable weather qui peut prendre 
l'une des valeurs suivantes : "ensoleillé", "pluvieux", "neigeux", ou autre.
// Utilise des conditions pour afficher un message spécifique :
// "Il fait beau aujourd'hui, profitez du soleil !" si weather est "ensoleillé".
// "Prenez un parapluie, il pleut." si weather est "pluvieux".
// "Mettez un manteau, il neige." si weather est "neigeux".
// "Je ne connais pas ce type de météo." pour tout autre valeur.
*/