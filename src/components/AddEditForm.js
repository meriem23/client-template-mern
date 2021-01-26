import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "#f9f9f9",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 999,
    width: "100vw",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function AddEditForm() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneNumber: "",
    homeAddress: "",
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };
  return (
    <React.Fragment>
      {oldUser ? (
        <span onClick={openModal}>EDIT </span>
      ) : (
        <i className="fas fa-plus add-btn" onClick={openModal} />
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2> Add user</h2>
        <form className="add-edit-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            name="fname"
            value={form.fname}
            type="text"
            placeholder="Enter your first name..."
            required
          />
          <label>Last Name</label>
          <input
            name="lname"
            value={form.lname}
            type="text"
            placeholder="Enter your last name..."
            required
          />
          <label>Email</label>
          <input
            name="email"
            value={form.email}
            type="email"
            placeholder="Enter your email..."
            required
          />
          <label>Phone Number</label>
          <input
            name="phoneNumber"
            value={form.phoneNumber}
            type="tel"
            pattern="[0-9]{8,}"
            required
            placeholder="Enter your phone Number..."
          />
          <label>Home Address</label>
          <input
            name="homeAddress"
            value={form.homeAddress}
            type="text"
            required
            placeholder="Enter your home address..."
          />
          <div>
            <button type="submit">Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default AddEditForm;
