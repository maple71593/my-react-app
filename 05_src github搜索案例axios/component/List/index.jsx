import React, { Component } from 'react'

export default class List extends Component {
    
    render() {
        const {user,isFirst,isLoading,err} = this.props
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
