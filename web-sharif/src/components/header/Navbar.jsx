import {useState} from 'react'
import "./Navbar.css"
import Logo from "../../assets/sharifLOGO2.webp"
import { TiArrowSortedDown } from "react-icons/ti";




export default function Navbar() {
    const [open, setOpen] = useState(false);
return (
    <header>
        <img src={Logo} id='logo' alt="Logo" />
        <nav className='navbar'>
            <ul className='menu'>
                <li>Inicio</li>
                <li><a href='#news'>Noticias</a></li>
                <li>Conciertos</li>
                <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    Tienda <TiArrowSortedDown />
                    {open && (
                        <ul className='sub-menu'>
                            <li>España</li>
                            <li>Mexico</li>
                        </ul>
                    )}
                </li>
                <li>Videos</li>
            </ul>
        </nav>
    </header>
)
}
