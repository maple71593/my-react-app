import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {

  enter = (event)=>{
    const {key,target} = event
    if(key !== 'Enter')return
    if(target.value.trim() === ''){
      alert('請輸入資料') 
      return
    }
      const todoobj = {id:target.length+1,name:target.value ,done:false}
      // 將todoobj傳給APP
      this.props.addtodo(todoobj)
      target.value =''
      console.log(todoobj);
  }
  
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.enter} placeholder="請輸入你的任務名稱，按Enter鍵確認" />
      </div>
    )
  }
}
