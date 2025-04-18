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
                <li className='item'><a className='item-link' href="">Inicio</a></li>
                <li className='item'><a className='item-link' href='#news'>Noticias</a></li>
                <li className='item'><a className='item-link' href="">Conciertos</a></li>
                <li className='item store'  onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    Tienda <TiArrowSortedDown />
                    {open && (
                        <ul className='sub-menu'>
                            <li className='item'><a className='item-link' href="">España</a></li>
                            <li className='item'><a className='item-link' href="">Mexico</a></li>
                        </ul>
                    )}
                </li>
                <li className='item'>Videos</li>
            </ul>
        </nav>
    </header>
)
}
