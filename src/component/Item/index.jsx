import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = { mouse: false } //標示滑鼠移入移出


  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  boxchange=(id)=>{
    return (event)=>{
      this.props.updatatodo(id,event.target.checked)
      console.log(event.target.checked);
    }
  }

  render() {
    const { name, id, done } = this.props
    const {mouse} = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.boxchange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
