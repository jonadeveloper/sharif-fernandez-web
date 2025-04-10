import {useState} from 'react';
import './Home.css';
import { GiCompactDisc } from "react-icons/gi";
import Modal from '../../components/modal/Modal';
import Capricornio from '../../assets/capricornio-sf.webp';
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { articles } from '../../api/data.json'
import NewsCard from '../../components/newsCard/newsCard';





export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
return (
    <>
    <section className='slider'>
        <div className="description">
            <h1>Sharif Fernandez</h1>
            
            <button className='cta' onClick={() => setIsOpen(true)}>
                Escucha mi ultimo Disco - Capricornio 
                <GiCompactDisc className='cd' />
            </button>
            <Modal className="modalDisc" open={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className='title-modal'>
                    « Haz presave de capricornio aqui »          
                </h2>
                <img className='img-disc' src={Capricornio} alt="disco capricornio" />
                <div className="listen-to-the-record">
                    <a href="https://www.youtube.com/watch?v=0VYNu7_zlE4&list=PL1pbt-Jy-buU25GklXRR9NdXXk3uzJFXq" target='_blank'>
                        <FaYoutube className='youtube' />
                    </a>
                    
                    <a href="https://open.spotify.com/intl-es/album/7jKJG9mIRc0BoATP9paXhz" target='_blank'>
                        <FaSpotify className='spotify' />
                    </a>
                    <a href="https://music.apple.com/ar/album/capricornio/1774030399" target='_blank'>
                        <SiApplemusic className='headphone' />
                    </a>
                </div>
            </Modal>
        </div>
    </section>
    <section id="news">
        <h2>Ultimas noticias</h2>
        <div>
            {articles.map(art => (
                <NewsCard
                key={art.id}
                id={art.id}
                title={art.title}
                shortText={art.shortText}
                />
            ))}
        </div>
    </section>
    </>
)
}
