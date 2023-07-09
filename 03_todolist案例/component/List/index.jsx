import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos,updatatodo,deltodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item updatatodo={updatatodo} deltodo={deltodo} key={todo.id}{...todo}/>
          })
        }
      </ul>
    )
  }
}
