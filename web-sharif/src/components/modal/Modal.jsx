import React from 'react'
import './Modal.css'
import { IoClose } from "react-icons/io5";


export default function Modal({ open, onClose, children }) {
    if (!open) return null;
return (
    <div className='modal' onClick={onClose}>
        <div className='modal-container' onClick={(e)=> e.stopPropagation()}>
            <button className='btn-close' onClick={onClose}>
                <IoClose className='icon' />
            </button>
            {children}
        </div>
    </div>
)
}
