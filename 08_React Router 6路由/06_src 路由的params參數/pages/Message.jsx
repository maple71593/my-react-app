import React,{ useState } from 'react'
import {Link,Outlet} from "react-router-dom";

export default function Message() {
    const [messages] = useState([
        { id: 1, title: '項目1', comment: '生活' },
        { id: 2, title: '項目2', comment: '體育' },
        { id: 3, title: '項目3', comment: '娛樂' },
        { id: 4, title: '項目4', comment: '政治' },
        { id: 5, title: '項目5', comment: '天氣' },
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((m) => {
                        return(
                        <li key={m.id}>
                            <Link to={`detail/${m.id}/${m.title}/${m.comment}`}>{m.title}</Link>
                        </li>
                        )
                    })
                }
            </ul>
            <Outlet/>
        </div>
    )
}
