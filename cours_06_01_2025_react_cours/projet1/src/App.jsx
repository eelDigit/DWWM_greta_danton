import Counter from "./components/Counter";
import Title from "./components/Title";
import Exo1 from "./exercices/Exo1";


const showTitle = true;


const todos = [
  "faire les courses", 
  "faire la vaisselle",
  "faire du sport"
]
console.log(todos);

function SubTitle({color, children, hidden}){
  // console.log(props);
  console.log(hidden);


const props = {
  id : 'monId',
  className : 'maClass'
}

  return (<>
            <h2  style ={{color: color}}  {...props} >  {children}  </h2>
          </>)
}



function App() {
  return (
    <>
          {showTitle ?  <Title /> : <p> ne s'affiche pas</p>}
            {/* l'attribut style est un objet ==> donc 2 accolades */}
            {/* <h2  style= {{ color: "red" , backgroundColor: "green"}}   >  <Title /> </h2> */}
            <SubTitle color="red" hidden = {false}>  Pour commencer: </SubTitle>
           <ul>
              { todos.map(todo => 
              <li key= {todo}>   {todo}   </li>
              ) }
            </ul>

            <Counter />
            <Exo1 />
    </>
    
  );
}

export default App;