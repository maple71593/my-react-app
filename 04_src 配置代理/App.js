import axios from 'axios'
import React, { Component } from 'react'

export default class App extends Component {

  getStudentData= ()=>{
    axios.get('http://localhost:3000/api1/students').then(
      response =>{console.log('成功獲取',response.data);},
      error =>{console.log('獲取失敗',error);}
      
    )
  }
  getStudentData2= ()=>{
    axios.get('http://localhost:3000/api2/cars').then(
      response =>{console.log('成功獲取',response.data);},
      error =>{console.log('獲取失敗',error);}
      
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>獲取學生數據</button>
        <button onClick={this.getStudentData2}>獲取車子數據</button>
      </div>
    )
  }
}
