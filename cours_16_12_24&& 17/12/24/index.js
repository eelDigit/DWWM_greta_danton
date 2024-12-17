console.log("coucou");
// alert("salut");

// ____[function ]____________________________________

// function classic
function faireQuelqueChose() {

// console.log("je suis une function");
// console.log("je suis un 2eme texte ");
// console.log("je suis un 3eme texte");

}

faireQuelqueChose();

// _______



// exemple : conversion function en function fleché____
function chat() {
    // console.log("mon super chat !");
}

const monChat = () => {
    // console.log("mon super super chat");
}
chat();

/*

lorsque je met des parametres dans ma fonction 
ici tache est la porte d'entrée de notre fonction
*/
const faireUneTache = (tache) => {
    // console.log("je fais : " + tache);
    
}
faireUneTache("les travaux");
faireUneTache("les courses");
// tache est ici la valeur dynamique de notre function 

// autre exemple avec function classic_____
function toto(friandise) {
// console.log("toto aime le : " + friandise);
}

toto("chocolat chaud " ); 
toto("bonbon " ); 

function calcule(x, y) {

//   /*premiere chose a faire */  console.log("coucou");
  /* deuxieme chose a faire */return x + y ;


}
calcule(5,8);

// function qui se joue toutes seul_____
// (function autoPlay() {

//     alert("je me joue toute seul")
// } ())


(()=> {
    // console.log("je suis une function flèché qui se joue toute seul");
})();

// exo__________________
/**
 créer une fonction flèché appelée salutation qui prend un nom en parametre 
 et retourne une chaine de caractère sous la forme : "Bonjour , [nom]".
 * 
 */
// cas 1
function salutation(nom){
    return " Bonjour, " + nom;
}
// console.log(salutation('jack'));
// cas 2
const salut = (nom) => {
    // console.log("Bonjour, " + nom );
}
salut("Alice");

// cas 3
const hello = nom => `Bonjour, ${nom} `;
// console.log(hello("Bob"));

// exo 2__________________
//  créer une fonction flèché appellée classerAge qui prend un age en parametre
// le function doit retiurner une chaine de carectere  en fonction des conditions suivantes: 
//  si age inferieur a 12 retourner "enfant"
// si age compris entre 12 entre 17 inclus  retourner "Ado"
// si age compris entre 18 et 64 inclus retourner "adulte"
// si age supérieur a 64 ans retourner "senior"
// tester la function 

// correction 1 
const classerAge = (age) => {
    if(age<12) {
        // console.log("Enfant"); 
    }else if(age >=12 && age <=17 ) {
        // console.log("Ado");
    }else if(age >=18 && age <= 64) {
        // console.log("Adulte");
    }else {
        // console.log("Senoir");
    }
} 
classerAge(36);

// correction 2
const classeAge = age => {
    if(age < 12) return "Enfant";
    else if(age >= 12 && age <= 17)return "Ado";
    else if (age>= 18 && age <=64)return "Adult"
    else return "senior";
} 

// console.log(classeAge(70));

// correction 3
const classAge = age =>
age < 12 ? "Efant" : age <= 17 ? "Ado" : age <=64 ? "Adult" : "senior" ;


// exo 3__________________
/**
   *  Créez une fonction fléchée appelée calculerPrix qui prend deux paramètres :

        prixInitial : le prix de départ de l'article.
        typeClient : une chaîne de caractères indiquant le type de client ("Normal", "Membre", ou "VIP").
        La fonction doit appliquer une réduction en fonction du type de client :

        "Normal" : aucune réduction, le prix reste le même.
        "Membre" : 10% de réduction sur le prix initial.
        "VIP" : 20% de réduction sur le prix initial.
        La fonction doit retourner le prix final après application de la réduction.

        Testez votre fonction avec les exemples suivants :

        calculerPrix(100, "Normal") doit retourner 100.
        calculerPrix(100, "Membre") doit retourner 90.
        calculerPrix(100, "VIP") doit retourner 80.

   *  */ 

        // correction 
        function calculerPrix(prixInitial , typeClient){

            if (typeClient=== 'Normal') return prixInitial;
            else if(typeClient=== "Membre") return prixInitial * 0.9;
            else if(typeClient=== "VIP") return prixInitial * 0.8;
            else return "Inconnu";

        }
        // console.log(calculerPrix(100, "VIP"));

        // la porté des variables
        
        function calculeAjoute2(){
            var b = 8;
            let a = 2
            
            return b + 2;
        }
        console.log(calculeAjoute2());
        // console.log(a);
        // console.log(b);
        // console.log(a);