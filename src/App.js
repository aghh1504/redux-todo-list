import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { increment, decrement, onChange, onSubmit, toggle } from './actions'

class App extends Component {


  render() {
    return (
      <div className="App">
        <form onSubmit={this.props.onSubmit}>
          <input value={this.props.value} onChange={this.props.onChange}/>
          <button type='submit'>add</button>
        </form>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        {this.props.number}
        <ul style={{listStyleType: 'none'}}>
        {this.props.arr.map(ele => {
          return <div style={{display: 'flex'}}><input  type="checkbox" checked={ele.checked} onClick={this.props.toggle}/><li>{ele.text}</li></div>
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    console.log('store', store);
    return {
      number: store.counter,
      value: store.toDo.value,
      arr: store.toDo.arr
    }
  }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({increment, decrement, onChange, onSubmit, toggle}, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(App)
