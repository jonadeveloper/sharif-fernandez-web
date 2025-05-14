import React from 'react';
import { useParams , useNavigate} from 'react-router-dom';
import {articles} from "../../api/data.json";
import './NewsCardDetail.css';

export default function NewsCardDetail() {
    const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  if (!article) return <p>Artículo no encontrado.</p>;
  return (
    <>
    <article className='article-container'>
      <div className="article">
        <img className='img-news' src={article.image} alt={article.title}/>
        <div className="article-body">
          <h1 className='article-title'>{article.title}</h1>
          <p className='article-description'>{article.textComplete}</p>
        </div>
      </div>
    </article>
    <button className='btn-back' onClick={() => navigate(-2)}>
        volver
    </button>
    </>
  )
}
