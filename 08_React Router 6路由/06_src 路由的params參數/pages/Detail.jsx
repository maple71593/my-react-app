import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const {id,title,comment} = useParams()
    
  return (
    <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{comment}</li>
    </ul>
  )
}
