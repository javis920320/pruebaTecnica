import React, { useEffect, useState } from "react";
import "./styles.css";
const Modal = ({showModal, closeModal, modalContent }) => {
  const [isOpen, setIsOpen] = useState(showModal);
  useEffect(() => {
    setIsOpen(showModal);
  }, [showModal]);
  // Cerrar el modal al hacer clic fuera del contenido
  const handleCloseModal = ( ) => {
    setIsOpen(false);
    closeModal();
  };
  return (
   
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={handleCloseModal}>
      {/* <div className="modal-content" onClick={(e) => e.stopPropagation()}> */}
      <div className="" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        {modalContent}
        {/* <div className="modal-body">{modalContent}</div> */}
      </div>
    </div>
  );
};

export default Modal;
