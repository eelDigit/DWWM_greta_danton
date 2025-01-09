import React, {Component} from "react";

import AgePersonne from "./AgePersonne"
// class Personne extends Component {
//     render() {
//       return (
//         <>
//            <h1> Joe </h1> 
//            <p>Age : 31 </p>
//            <p>Sex : Homme </p>
//         </>
//       )
//     } 
//   }

// function Personne(props) {
//   return (
//     <>
//     <h1> {props.nom} </h1> 
//     <p>Age : {props.age} </p>
//     <p>Sex : {props.sex} </p>
//  </>
//   )
// }
const Personne = (props) => {
  return (
    <>
    <h1> {props.nom} </h1> 
    <p>Age : {props.age} </p>
    <p>Sex : {props.sex} </p>

     {/* <AgePersonne /> */}

 </>
  )
}

// class Personne extends Component {

// // constructor(props) {
// //   super()
// // }
// render() {
//   return (
//           <>
//           <h1> {this.props.nom} </h1> 
//           {/* <p>Age : {this.props.age} </p> */}
//           <AgePersonne />

//           <p>Sex : {this.props.sex} </p>
//       </>
//   )
// }

// }

  export default Personne;