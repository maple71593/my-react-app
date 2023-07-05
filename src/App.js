import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
        <div className="todo-container">
          <div className="todo-wrap">
            <ul className="todo-main">
              <li>
                <label>
                  <input type="checkbox"/>
                  <span>xxxxx</span>
                </label>
                <button className="btn btn-danger" style={{display:'none'}}>删除</button>
              </li>
              <li>
                <label>
                  <input type="checkbox"/>
                  <span>yyyy</span>
                </label>
                <button className="btn btn-danger"  style={{display:'none'}}>删除</button>
              </li>
            </ul>
            <div className="todo-footer">
              <label>
                <input type="checkbox"/>
              </label>
              <span>
                <span>已完成0</span> / 全部2
              </span>
              <button className="btn btn-danger">清除已完成任務</button>
            </div>
          </div>
        </div>
    )
  }
}
