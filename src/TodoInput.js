import React, {Component} from 'react'

export default class TodoInput extends Component {

  onClick = () => {
    this.props.onClick(this.props.text)
  }

  render() {
    return (
      <input type="checkbox" checked={this.props.checked} onClick={this.onClick}/>
    )
  }
}
