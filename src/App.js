import React, { Component } from 'react'
import './App.css'
import Header from './component/Header';
import List from './component/List'
import Footer from './component/Footer'

export default class App extends Component {

  state = {
    todos:[
      {id:5,name:'janon',done:true},
      {id:4,name:'takayama',done:false},
      {id:3,name:'kobayashi',done:true},
      {id:2,name:'regoku',done:true},
      {id:1,name:'takanashi',done:true},
    ]
  }

  // 用於添加一個todo 接收的參數是todo對象
  addtodo=(todoobj)=>{
    // 獲取todos
    const {todos} =this.state
    // 追加一個todos
    const newdtodos = [todoobj,...todos]
    // 更新狀態
    this.setState({todos:newdtodos})
    
  }

  updatatodo = (id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map((event)=>{
      if (event.id === id) return {...event,done}
      else return event
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addtodo={this.addtodo}/>
          <List todos={todos} updatatodo={this.updatatodo}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
