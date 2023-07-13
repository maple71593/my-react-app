import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  const[search] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const comment = search.get('comment')
  return (
    <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{comment}</li>
    </ul>
  )
}
