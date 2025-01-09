import React, { Component } from 'react'


class Horloge extends Component {
    
    
    constructor(props) {
        super(props)
        this.state = { 
            date : new Date()
          } 

          console.log("comosant crée");
    }
    
    // state = { 
    //     date : new Date()
    //   } 

      componentDidMount() {
        console.log("composant monté");
        this.Time =  setInterval( ()=> this.setState({date : new Date() }) , 1000 )
      }
      componentWillUnmount() {
        clearInterval(this.Time );
        console.log("composant démonté");
      }

    render() { 

        console.log(' composant affiché');
        return (
            <h1> Horloge :  {this.state.date.toLocaleTimeString()} </h1>
        );
    }
}
 
export default Horloge;
