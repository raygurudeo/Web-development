import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links } from './data'
const Modal = () => {
  return <div className={`modal-overlay`}>
    <div className="modal-container">
      <h3>Modal content</h3>
      <button className="close-modal-btn">
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
