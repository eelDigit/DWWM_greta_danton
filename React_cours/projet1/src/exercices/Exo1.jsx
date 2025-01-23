import React, { useState } from 'react';



const Exo1 = () => {

const [etat, setEtat] = useState("on");
const changerEtat = () => {
    etat== "on" ? setEtat("off") : setEtat("on");
}
    return (
        <>

        <p>
            Créer un composant qui affiche un bouton 
            permettant d'alterner entre "ON" et "OFF"
        </p>

        <button onClick={changerEtat} > {etat} </button>
        </>
    );
};

export default Exo1;