import React from 'react'
import { Link } from 'react-router-dom';


export default function NewsCard({ id, title, image , shortText }) {
  return (
    <Link to={`/articulo/${id}`}>
        <article>
          <img src={image} alt={title}/>
          <div>
            <h2>{title}</h2>
            <p>{shortText}</p>
          </div>
        </article>
    </Link>
  )
}
