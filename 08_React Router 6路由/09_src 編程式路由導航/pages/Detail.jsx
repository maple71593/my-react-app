import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
  const {state:{id,title,comment}} = useLocation()
  return (
    <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{comment}</li>
    </ul>
  )
}
