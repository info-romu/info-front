import React from 'react'

export default function PopUp({ isOpen, onClose, title, description }) {
  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className='popup-content'>
        <span className='popup-close' onClick={onClose}>Fermer la fenêtre</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
