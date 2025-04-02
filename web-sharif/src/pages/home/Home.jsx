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
        <div className="container-articles">
            <article className='article'>
                <h3 className='title-article'>SHARIF - TOUR MEXICO 2025</h3>
                {/* <img src="" alt="" /> */}
                <p className='text'>
                    Mi gente bonita, volvemos a mi México amado para cantar de nuevo con ustedes. En esta ocasión van a ser tres conciertos únicos y especiales, porque me traigo a Rapsusklei y a Juaninacka 
                    como invitados a cada uno de ellos. <br /> <br />No les quiero adelantar muchas sorpresas, pero para ir abriendo boca les diré que 
                    el evento constara de tres shows independientes. <br /> <br /> 
                    En la sección de conciertos tienen la información y el cartel de cada ciudad. <br /> <br />
                    Les besamos.
                </p>
            </article>
            <article className='article'>
                <h3 className='title-article'>
                RAFAEL LECHOWSKI & SHARIF <br /> «UN INSTANTE ETERNO» Tour
                </h3>
                {/* <img src="" alt="" /> */}
                <p className='text'>
                Familia, no les descubro nada si les hablo del amor y admiracion que siento hacia Rafael Lechowski. 
                En un bello y magico eclipse hemos unido fuerzas para darle a nuestra gente de Latam el show que se merecen.
                <br /> <br />
                Sera a lo largo de 8 conciertos (quiza alguno mas), donde Rafael y yo nos haremos cada uno un show inividual 
                en el que cantaremos temas de todos nuestros discos, desde los mas antiguos a los mas nuevos.
                <br /> <br />
                Habra merchan, sorpresas y buenos versos.
                <br /> <br />
                Les besamos.
                </p>
                <br /> <br />
                <p className="important">
                P.D: Solo habra 35 meet & greet por ciudad.
                </p>
            </article>
            <article className='article'>
                <h3 className='title-article'>
                    TOUR DIAS Y ELECTRICIDADES
                </h3>
                {/* <img src="" alt="" /> */}
                <p className='text'>
                Volvemos a los escenarios como siempre, con un show como nunca. Volvemos con un nuevo disco bajo el brazo y 
                con un nuevo formato de directo en el que hemos incluido las mejores canciones de mis discos anteriores y 
                las de este nuevo trabajo. Les esperamos a todos para cantar juntos, y brindar y celebrar bajo su cielo.
                <br /> <br />
                Les beso y les beso.
                </p>
            </article>
        </div>
    </section>
    </>
)
}
