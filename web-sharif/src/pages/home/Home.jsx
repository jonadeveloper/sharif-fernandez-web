import React from 'react';
import './Home.css';

export default function Home() {
return (
    <>
    <section className='slider'>
        <div className="description">
            <h1>Sharif Fernandez</h1>
        </div>
    </section>
    <section className='news'>
        <h2 className="title-section">
            Noticias - Novedades
        </h2>
        <article>
            <h3>SHARIF - TOUR MEXICO 2025</h3>
            {/* <img src="" alt="" /> */}
            <p>
                Mi gente bonita, volvemos a mi México amado para cantar de nuevo con ustedes. En esta ocasión van a ser tres conciertos únicos y especiales, porque me traigo a Rapsusklei y a Juaninacka 
                como invitados a cada uno de ellos. <br /> <br />No les quiero adelantar muchas sorpresas, pero para ir abriendo boca les diré que 
                el evento constara de tres shows independientes. <br /> <br /> 
                En la sección de conciertos tienen la información y el cartel de cada ciudad. <br /> <br />
                Les besamos.
            </p>
        </article>
        <article>
            <h3></h3>
            {/* <img src="" alt="" /> */}
            <p></p>
        </article>
        <article>
            <h3></h3>
            {/* <img src="" alt="" /> */}
            <p></p>
        </article>
    </section>
    </>
)
}
