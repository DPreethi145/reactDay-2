import React, { Component } from 'react'

export default class Classcompo extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'Click to see Class Component',
            toggle:true
        }
    }
  render() {
    return (
      <>
     
      <center>
      <button onClick={()=>this.setState({toggle:!this.state.toggle})}>ClassCOmpo</button>
      {
          this.state.toggle? <h1>{this.state.name}</h1>:<h1>welcome to class Component</h1>
      }
      </center>
     
      
      </>
    )
  }
}
