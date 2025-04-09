import React from 'react'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='footer'>
        <p>
            &copy; {year} | Sharif. Todos los derechos reservados. Un sitio creado por <a href="https://instagram.com/jona.dev_ok" target='_blank'>Jona - Dev</a>
        </p>
    </footer>
  )
}
