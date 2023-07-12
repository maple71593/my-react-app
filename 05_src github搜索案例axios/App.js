import React, { Component } from 'react'
import List from './component/List'
import Search from './component/Search'
export default class App extends Component {

    state = {//初始化狀態
        user:[],//user初始值為數組
        isFirst:true,//是否為第一次打開於加載中
        isLoading:false,//標示是否於加載中
        err:'',//儲存請求相關的錯誤訊息
    }

    updateAppState =(user)=>{
        this.setState(user)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
