import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  Allchecked = (event)=>{
    this.props.CheckALL(event.target.checked)
  }

  Delecount =()=>{
    this.props.delecount()
  }

  render() {

    const {todos} = this.props

    const donecoust = todos.reduce((pre,todo)=>{return pre + (todo.done? 1:0)},0)

    const all = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.Allchecked} checked={donecoust ===all && all !== 0? true : false}/>
        </label>
        <span>
          <span>已完成{donecoust}</span> / 全部{all}
        </span>
        <button onClick={this.Delecount} className="btn btn-danger">清除已完成任務</button>
      </div>
    )
  }
}
