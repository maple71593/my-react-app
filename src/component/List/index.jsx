import React, { Component } from 'react'
import Item from '../item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item todos={todos} key={todo.id}{...todo}/>
          })
        }
      </ul>
    )
  }
}
