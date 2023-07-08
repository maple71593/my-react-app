import React, { Component } from 'react'
import './App.css'
import Header from './component/header'
import List from './component/list'
import Footer from './component/footer'

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

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos={todos} addtodo={this.addtodo}/>
          <List todos={todos}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
