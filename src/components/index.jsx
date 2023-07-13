import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    function walk() {
        navigate(1)
    }
    function back() {
        navigate(-1)
    }

    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={walk}>前進</button>
                <button onClick={back}>後退</button>
            </div>
        </div>
    )
}
