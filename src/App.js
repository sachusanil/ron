import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import styles from './App.css'

class App extends Component 
{ constructor(){
  super()
  this.state = {
    quote :'Click Generate',
  }
}

handleClick = () => {
  fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
  .then(vani => vani.json())
  .then(vani => {
    this.setState({quote: vani});
  })
  
}

render(){
    return (
    <div className="pa5 tc vh-100">
        <h1 className="ph0 f6 f1-ns center" > Ron Swanson - The Man, The myth, The Legend </h1>
    <div className="flex items-center">    
      <div className="w-50 pa5 flex flex-column items-center ">
       <img src= 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2016/07/2016_RonSwanson_Press_210716-1-920x610.jpg' alt="Ron Swanson" className= "pv5"/>
       <button onClick={this.handleClick}> Talk!!</button> 
      </div>
      <div className="w-50 pa5">
        <h1 className="ph0 f4 f1-ns measure-narrow center">{this.state.quote}</h1>
      </div>
    </div>
   </div> 
);

}

 

}

export default App;
