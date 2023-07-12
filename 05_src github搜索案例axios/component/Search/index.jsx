import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Scarch extends Component {
    search_value =()=>{
        //獲取用戶的輸入(連續解構附值+重命名)
        const {entervalue:{value:enter}} = this
        //發送請求前通知App更新狀態
        this.props.updateAppState({isFirst:false,isLoading:true})
        //發送網路請求
        axios.get(`/api1/search/users?q=${enter}`).then(
            result => 
                //請求成功後通知App更新狀態
               this.props.updateAppState({isLoading:false,user:result.data.items}),
            err =>
                this.props.updateAppState({isLoading:false,err})
        );
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜尋 Github 使用者</h3>
                <div>
                    <input ref={c => this.entervalue =c} type="text" placeholder="我是輸入框" />&nbsp;
                    <button onClick={this.search_value}>按我</button>
                </div>
            </section>
        )
    }
}
