
import HandleClick from "./HandleClick";

const title = "liste de choses a faire !";
const style = { 
    color: "yellow",
    backgroundColor: "teal"
  }
function Title(props){
    return(
      <h1 className={title}  onClick={HandleClick} >  {title} </h1> 
    )
  }
export default Title;