import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'
import './index.css'

export default class Scarch extends Component {
    search_value =async()=>{
        //獲取用戶的輸入(連續解構附值+重命名)
        const {entervalue:{value:enter}} = this
        //發送請求前通知List更新狀態
        PubSub.publish('123',{isFirst:false,isLoading:true})

        //#region發送axios網路請求
        // axios.get(`/api1/search/users?q=${enter}`).then(
        //     result => 
        //         //請求成功後通知List更新狀態
        //         PubSub.publish('123',{isLoading:false,user:result.data.items}),
        //     err =>
        //         PubSub.publish('123',{isLoading:false,err})
        // );#region

        // #region 發送Fetch網路請求(未優化)
        //     fetch(`/api1/search/users?q=${enter}`).then(
    //         result => {
    //             '連線伺服器成功';return  result.json()},
    //         err => {console.log('連線伺服器失敗',err);
    //             return new Promise(() => {})
    //     }
    //     ).then(
    //         result =>{console.log('獲取數據成功',result);},
    //         err=>{console.log('獲取數據失敗');},
    //     )#region


    // #region 發送Fetch網路請求(優化)
        try {
            const response = await fetch(`/api1/search/users?q=${enter}`)
            const data = await response.json()
            PubSub.publish('123',{isLoading:false,user:data.items})
        } catch (error) {
            PubSub.publish('123',{isLoading:false,error})
        }
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
