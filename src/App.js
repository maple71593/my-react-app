import React, { Component } from 'react'
import './App.css'
import Header from './component/header'
import List from './component/list'
import Footer from './component/footer'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List/>
          <Footer/>
        </div>
      </div>
    )
  }
}
