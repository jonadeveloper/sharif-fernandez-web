import React from 'react'
import { Link } from 'react-router-dom';
import './NewsCard.css'


export default function NewsCard({ id, title, image }) {
  return (
    <Link className='link' to={`/articulo/${id}`}>
        <article className='card'>
          <img className='img-news' src={image} alt={title}/>
          <h2 className='title-news'>{title}</h2>
        </article>
    </Link>
  )
}
