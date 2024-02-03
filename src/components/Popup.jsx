import React from "react";
import Modal from "react-modal";
import ResetPasswordBox from "../pages/ResetPasswordBox";

const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    e.preventDefault();

    setModalIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      width: "50%",
      height: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
    },
  };

  return (
    <div className="app-container hover:text-green-500">
      <button onClick={openModal}>¿Olvidaste tu contraseña?</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo Modal"
        style={customStyles}
      >
        <div className="hover:text-indigo-600">
          <button onClick={closeModal}>Cerrar ventana</button>
        </div>
        <ResetPasswordBox />
      </Modal>
    </div>
  );
};

export default Popup;
