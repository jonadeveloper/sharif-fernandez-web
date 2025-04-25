import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import {articles} from "../../api/data.json"

export default function NewsCardDetail() {
    const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  if (!article) return <p>Artículo no encontrado.</p>;
  return (
    <article>
        <h1>{article.title}</h1>
        <img src={article.image} alt={article.title}/>
        <p>{article.textComplete}</p>
        <button onClick={() => navigate(-1)}>
            volver
        </button>
    </article>
  )
}
