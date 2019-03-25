/* tslint:disable */
import React, { Component } from 'react'

import {connect} from 'react-redux'

export class Cont extends Component {
   
    
  render() {
    return (
      <div>
          <button onClick={this.props.incrementCounter}> Increment</button>
          <button onClick={this.props.decrementCounter}> Decrement</button>
     {this.props.sfn}
      </div>
    )
  }
}
const mapStateToProps = state => {
return {sfn:state.counter}
};

const mapDispatchToProps = dispatch => {
    return{
  incrementCounter:()=> {dispatch({type:'INCREMENT'});console.log("object")},
  decrementCounter:()=> {dispatch({type:'DECREMENT'});console.log("object")}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cont)
