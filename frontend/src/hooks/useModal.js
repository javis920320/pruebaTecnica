import { useState } from "react";

  export const useModal=()=>{
    const [stateModal, setShowModal] = useState(false);

    const openModal = () => {
    
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };

    return{stateModal,openModal, closeModal}

  }