import {useState} from 'react'
import "./Navbar.css"
import Logo from "../../assets/sharifLOGO2.webp"



export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
return (
    <header>
        <img src={Logo} id='logo' alt="Logo" />
        <nav className='navbar'>
            <ul className='menu'>
                <li className='item'><a className='item-link' href="/#">Inicio</a></li>
                <li className='item'><a className='item-link' href='/#news'>Noticias</a></li>
                <li className='item'><a className='item-link' href="/conciertos">Conciertos</a></li>
                <li className='item'>Videos</li>
            </ul>
            <button class={`hamburger ${openMenu ? "disabled" : ""}`} onClick={toggleMenu} id="hamburger" aria-label="Abrir menú">
                ☰
            </button>
            <nav className={`menu-hamburger ${openMenu ? "show" : ""}`}>
                <a className='item-link' onClick={() => setOpenMenu(false)} href="/#">Inicio</a>
                <a className='item-link' onClick={() => setOpenMenu(false)}  href='/#news'>Noticias</a>
                <a className='item-link' onClick={() => setOpenMenu(false)}  href="/conciertos">Conciertos</a>
                <a className='item-link' href="#contacto" onClick={() => setOpenMenu(false)}>Contacto</a>
            </nav>
        </nav>
    </header>
)
}
