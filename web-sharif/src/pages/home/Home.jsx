import {useState} from 'react';
import './Home.css';
import { GiCompactDisc } from "react-icons/gi";
import Modal from '../../components/modal/Modal';
import Capricornio from '../../assets/capricornio-sf.webp';


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
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className="modalDisc">
                    Escucha mi ultimo lanzamiento
                </h2>
                <img src={Capricornio} alt="disco capricornio" />
                <p>Este modal es completamente reutilizable y se cierra con la X.</p>
            </Modal>
        </div>
    </section>
    </>
)
}
