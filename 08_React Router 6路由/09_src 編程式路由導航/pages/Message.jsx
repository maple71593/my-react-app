import React,{ useState } from 'react'
import {Link,Outlet,useNavigate} from "react-router-dom";

export default function Message() {
    const navigate = useNavigate()
    const [messages] = useState([
        { id: 1, title: '項目1', comment: '生活' },
        { id: 2, title: '項目2', comment: '體育' },
        { id: 3, title: '項目3', comment: '娛樂' },
        { id: 4, title: '項目4', comment: '政治' },
        { id: 5, title: '項目5', comment: '天氣' },
    ])

    function showDetail(m){
        navigate('detail',{
            state:{
                id:m.id,
                title:m.title,
                comment:m.comment
            }
        })
    }

    return (
        <div>
            <ul>
                {
                    messages.map((m) => {
                        return(
                        <li key={m.id}>
                            <Link to='detail' state={{
                                id:m.id,
                                title:m.title,
                                comment:m.comment
                            }}>{m.title}</Link>
                            <button onClick={()=>showDetail(m)}>按我</button>
                        </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    )
}
