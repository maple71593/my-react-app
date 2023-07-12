import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {

    state = {   //初始化狀態
        user:[],//users初始值為數組
        isFirst:true,//是否為第一次打頁面
        ifLoading:false,//標示是否為加載中
        err:'',//儲存請求相關錯誤信息
    }

    componentDidMount(){
        this.token = PubSub.subscribe('123',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {user,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {   isFirst ? <h2>歡迎回來</h2>:
                    isLoading ?<h2>Loading</h2>:
                    err?<h2>{err}</h2>:
                    user.map((user) => {
                        return (
                            <div key={user.id} className="card">
                                <a rel="noreferrer" href={user.html_url} target="_blank">
                                    <img alt='avatar' src={user.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }


            </div>

        )
    }
}
