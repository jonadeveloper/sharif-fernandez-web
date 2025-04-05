import React from 'react';
import './Home.css';
import { GiCompactDisc } from "react-icons/gi";
import photoTour from "../../assets/shariftour2025.webp";


export default function Home() {
return (
    <>
    <section className='slider'>
        <div className="description">
            <h1>Sharif Fernandez</h1>
            
            <button className='cta'>
                Escucha mi ultimo Disco - Capricornio 
                <GiCompactDisc className='cd' />
            </button>
        </div>
    </section>
    </>
)
}
