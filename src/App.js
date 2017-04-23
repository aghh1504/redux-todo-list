import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { increment, decrement, onChange, onSubmit, toggle, allItems, checkedItems, UnCheckedItems } from './actions'

class App extends Component {
  // onClick = (event) => {
  //   this.props.arr
  //   .filter(e=>  e.text === event.target.name)
  //   .map(item => {
  //     this.props.toggle(item.text)
  //   })
  // }

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
        {this.props.arr.filter(e => {
            if (this.props.show === 'checked')
               return e.checked
            if (this.props.show === 'unchecked')
               return !e.checked
             return true
          }).map(ele => {
          return <div style={{display: 'flex'}}><input type="checkbox" checked={ele.checked} onClick={() => this.props.toggle(ele.text)}/><li>{ele.text}</li></div>
        })}
        </ul>
        <button onClick={this.props.allItems}>Show All</button> <button onClick={this.props.checkedItems}>Checked</button> <button onClick={this.props.UnCheckedItems}>UnChecked</button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    console.log('store', store);
    return {
      number: store.counter,
      value: store.toDo.value,
      arr: store.toDo.arr,
      show: store.toDo.show
    }
  }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({increment, decrement, onChange, onSubmit, toggle, allItems, checkedItems, UnCheckedItems}, dispatch)
  }


export default connect(mapStateToProps, mapDispatchToProps)(App)
