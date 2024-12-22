// différents type donnée
let string = "chaine de caractere";
let number = 25;
let array = ["bordeaux", "Lyon", "Paris"];

let object = {
    pseudo: "Joe", 
    age : 25,
    technos: ["HTML", "CSS", "Javascript"],
    admin: false
}
let myVariable; // [undefined]
let boolean= true // ou false
letarbre = null



// console.log(object.technos[1] );
// console.log(object.technos[0][1] );

// [while]___peut utilisée__________________________

let w = 0; 
while (w < 10) {
    w++;
    // console.log("la valeur de w est : " + w);
}


// [do while]_____Encore moin utilisé_______________________

let d = 0 ;
do {
    d++;
    // console.log(d);
}while(d<5);

// [la boucle for ]________________________________________
 let data = [
    {
        pseudo : "joe",
        age: 50,
        technos: ["html", "css", "js"],
        admin: false
    },
    {
        pseudo : "jacques",
        age: 39,
        technos: ["react", "php", "sql"],
        admin: false
    },
    {
        pseudo : "william",
        age: 27,
        technos: ["node.js", "symfony", "bootstrap"],
        admin: true
    }
 ]


// 1ere façon  
for (const user of data) {
    document.body.innerHTML += `
    <ul> 
    <li> ${user.pseudo} - ${user.age} ans </li>
    </ul>

    `
}

// 2eme façon

console.log(data.length);

for (i = 0 ; i<data.length ; i++ ) {

    // console.log(data[i].technos[0]  );

    document.body.innerHTML +=  `
    <p> ${data[i].pseudo } </p>
    `
}


// forEach__________

const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach( (box) => {
box.addEventListener('click' , (e) => {
    e.target.style.background = "red"
})
} )

// switch___________________

document.body.addEventListener('click', (e) => {
    // console.log(e.target);
    // if (e.target.id === "javascript" ) {
    //     document.body.style.background = "pink"
    // }

    switch(e.target.id) {
        case "javascript" : 
            document.body.style.background = "pink";
            break;
        case "python": 
            document.body.style.background = "teal";
            break;
        case "php": 
            document.body.style.background = "green";
            break;

        default: null;

    }





})