import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from 'components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ src, alt, onCloseModal }) {
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
   });
 
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };
    return createPortal(
      <>
        <div className={s.Overlay} onClick={handleBackdropClick}>
          <div className={s.Modal}>
            <img src={src} alt={alt} />
          </div>
        </div>
      </>,
      modalRoot,
    );
  }

export default Modal;
