/* tslint:disable */
import React, { Component } from 'react'

import {connect} from 'react-redux'
export class Cont2 extends Component {
  render() {
    return (
      <div>
          State From second component
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
    
    export default connect(mapStateToProps,mapDispatchToProps)(Cont2)
