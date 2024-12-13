// alert('coucou l\'es amis !');

// console.log("coucou les amis !  ")

var monSuperChat = "felix";
// console.log(monSuperChat);

// variables_________________________

var unText ="voici un texte";
var unText = "voici un deuxieme texte";
// console.log(unText);

// division des var avec ECMAscript (let / const)
let texte = "coucou les amis!";
 texte = "coucou toi";
// console.log(texte);

const phrase = "je suis une phrase !"
//  phrase = "je suis une autre phrase" // impossible
// console.log(phrase);

// ______________________________________________

let unChiffre = 12;
// console.log(unChiffre);

// concatenation _____________________________

let chaine = "mon super chat";
let newChaine = "j'aime " + chaine;
// console.log(newChaine);

let chiffre = 18;
let newChiffre = "le nouveau chiffre est : " + chiffre;
// console.log(newChiffre);
let nouveauChiffre = ` le nouveau chiffre est : ${chiffre} `;
// console.log(nouveauChiffre);


// type de données _____________________________

let chaineDeCaractere = "je suis une chaine de caractère";
// en anglais string 
let string = "je suis une chaine de caractère";
// type number 
let number = 12;

// type boolean
let boolean = true;
let boulean = false;

// type tableau (array)
let array = ["coucou", "suis", 24, true] ;
// console.log(typeof array);

// type objet 
let object = {
    prenom: "Joe",
    age: 35,
    ville: "clichy"
}

// type undefined
let fleur;
// console.log( typeof fleur); 

// type null
let arbre = null;
// console.log( typeof arbre);


// _____[les opérateurs ]_____________________________

// c'est comme une calculatrice
// console.log(4 + 5 );
// console.log(7 - 5 );
// console.log(7 - (-9) );

// console.log(4 * 5 );
// console.log(4 / 5 );
// console.log(4 **5 );
// console.log(4 % 5 );

// [les opérateurs d'affectation] ______

let total = 0;
total = total + 1;
total++;
total--; 

// valable pour les calculs très simple
++total;
--total;
console.log(total);


total+= 5;
total-= 5;
total*= 5;
total/= 5;


let xena = 4;
// total = xena++; // ne fonctionne pas 
// console.log(total);

// total = ++xena;
xena++;
total = xena;
console.log(total);


/* exo 1: 
Déclarer une variable nommé phrase
et une autre nommé vacance 
qui renvoie dans la console j'aime les vacances
grace a une concaténation.
*/
let phras = "j'aime les ";
let vacance = "vacances";
let conclusion = phras + vacance
let conclusions = ` ${phras} ${vacance} `;
console.log(conclusion);
console.log(conclusions);





/*exo2
Déclare une variable nom avec la valeur "Alice", une variable age avec la valeur 25, 
et une variable ville avec "Paris".
Concatène ces informations dans une phrase du type :
 "Je m'appelle Alice, j'ai 25 ans et je vis à Paris."
  en utilisant les backticks (``).
Affiche cette phrase dans la console.

*/

let nom = "Bob";
let age = "45";
let ville = "Paris"; 

let phrases = " Je m'appelle " + nom + " et j'ai "+ age + " ans et je vie a " + ville  +"." ;   

let phrasDeAlise = `
je m'appelle ${nom} j'ai ${age} ans et je vie a ${ville} .

`
console.log(phrasDeAlise);


/*
exo3

Déclare un objet "user" avec les propriétés suivantes :
prenom : "Alice",
age : 30,
ville : "Marseille".

Modifie la valeur de ville pour "Lyon".

Ajoute une nouvelle propriété profession avec la valeur "Développeur".
Affiche tout l’objet dans la console.
*/
let user = {
    prenom : "Alice",
    age : 30,
    ville : "Marseille"
}

console.log(user.age);
console.log(user.prenom);
console.log(user.ville);
user.ville = "Lyon";
console.log(user.ville);

user.profession= "Dévoloppeur";
console.log(user);

/*
exo 4
Déclare un tableau notes contenant les valeurs [12, 15, 20, 10, 18].
Modifie la deuxième valeur pour qu’elle devienne 16.
*/

let notes = [12, 15, [20, 10, 68, true, "chat"], 18];
//Ajouter le chiffre 55 dans le tableau
notes.push(55);

console.log(notes);

console.log(notes[2][4]);