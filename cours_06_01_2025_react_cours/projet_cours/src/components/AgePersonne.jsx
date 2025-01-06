const AgePersonne = (props) => {
    let now = new Date();
    let year = now.getFullYear(); 
    
    
    return ( 
        <>
            Age : {props.age} - ({year - props.age})

        </>

     );
}
 
export default AgePersonne;