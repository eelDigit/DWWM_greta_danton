import React, {Component} from 'react';

import MonComponent from './components/MonComponent';
import Personne from './components/Personne';
import AgePersonne from './components/AgePersonne';


// function App() {
//   return (
//         <div>
//           <h1> Couou</h1> 
//           <p>mon paragraph</p>
//           <p>mon paragraph</p>
//           <p>mon paragraph</p>
//         </div> 
//   )
// }



// class App extends Component {
//   render() {
//     return (<>
//              <MonComponent />
//              <Personne  nom= "joe" age = "31"  sex= "homme"  />
//              <Personne  nom= "Jacques" age = "25"  sex= "homme" />
//              <Personne  nom= "William" age = "15"  sex= "homme"  />
//             </>
// )
//   }
// }


const App =  (props) => {
  return(
    <>
             <MonComponent />
             <Personne  nom= "joe" age= "31"  sex= "homme"  />
             <Personne  nom= "Jacques" age= "25"    sex= "homme" />
             <Personne  nom= "William" age= "15"    sex= "homme"  />
            </>
  )
}
export default App;
