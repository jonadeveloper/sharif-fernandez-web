import {useState} from 'react'
import "./Navbar.css"
import Logo from "../../assets/sharifLOGO2.webp"
import { IoIosArrowDown } from "react-icons/io";




export default function Navbar() {
    const [open, setOpen] = useState(false);
return (
    <header>
        <img src={Logo} id='logo' alt="Logo" />
        <nav className='navbar'>
            <ul className='menu'>
                <li>Inicio</li>
                <li>Conciertos</li>
                <li onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    Tienda <IoIosArrowDown />
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
