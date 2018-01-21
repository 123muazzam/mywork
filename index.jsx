import React from 'react';
import ReactDOM from 'react-dom'

import './style.css'
class Newchild extends React.Component{
    render(){
        return<b> This is child </b>;
    }

}

class Newapp extends React.Component{
    constructor(){
        super();
    this.state={
        color:"green-color"
    }
  }
  
sayhello() {
       
       this.setState({
           color:"yellow-color"
       });

    };
render(){
    
    return( 
    <div>
    <Newchild/>
    <button onClick={this.sayhello.bind(this)}> New Button</button>
<h1 className={this.state.color}>new color</h1>
    <p>Yes it is running</p>
    </div>
    )}


}


ReactDOM.render(<Newapp />, document.getElementById("root"))
