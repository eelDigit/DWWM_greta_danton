import React from 'react';
import { useState } from 'react';


function Counter(props) {

    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({
       firstname: "Joe", 
       lastname: "Dalton",
       age : 31
    })
// let count = 0;

 const name ={
    nom: "charlene"
 }


const increment = () => {
    // setCount(count + 1 );
    setCount( (count) => count + 1  );
    // setCount( (count) => count + 1  );
    // setCount( (count) => count + 1  );
}
const decrement = ()=> {
    setCount(count - 1);
}

const incrementAge = ()=> {
    // setPerson
    console.log('age');
   
    setPerson({...person, age: person.age +1});
}
const changePerson = ()=> {
    console.log('personne');

    setPerson({...person, firstname : 'Bily', lastname: 'le kid'})
}

//  Ne fonctionne pas ______________________
// if( person.age < 15) {
//     const [count , setCount = useState(0)];

// }


    return (
        <div>
            <p> Compteur : {count} </p>
            <button onClick={increment} >  Ajouter 1 </button>
            <button onClick={decrement} >  Retirer 1 </button>
            <p> {name.nom} </p>
            <p> {person.firstname} - {person.lastname}</p>
          <p>
          age : {person.age}
          </p> 
            <button onClick={incrementAge} >  augmenter age de Joe </button>
            <button onClick={changePerson} > Changer la personne </button>
        </div>
    );
}

export default Counter;