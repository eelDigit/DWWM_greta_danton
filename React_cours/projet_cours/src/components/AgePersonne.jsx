// const AgePersonne = (props) => {
//     // let now = new Date();
//     // let year = now.getFullYear(); 
   
//     return ( 
//         <>
//             Age : {props.age} 
//         </>

//      );
// }
 

import React from 'react'

const AgePersonne = (props) => {
    return (
    <>
      <h1> {props.nom} </h1> 
      <p>Age : {props.age} </p>
      <p>Sex : {props.sex} </p>
   </>
    )
}
export default AgePersonne;