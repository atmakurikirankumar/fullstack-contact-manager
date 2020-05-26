import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactForm = () => {
  const {
    addContact,
    updateContact,
    currentContact,
    clearCurrentContact,
  } = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;

  const addOrUpdate =
    currentContact !== null ? "Update Contact" : "Add Contact";

  // On form inputs change
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // on Form load
  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [currentContact]);

  // Add/Update Contact through Form Submit
  const onSubmit = (e) => {
    e.preventDefault();

    if (currentContact !== null) {
      updateContact(contact);
    } else {
      addContact(contact);
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  // Clear Form
  const clearForm = () => {
    clearCurrentContact();
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">{addOrUpdate}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={onChange}
        />
        <h4>Contact Type:</h4>
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />{" "}
        Prfoessional
        {"  "}
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={onChange}
        />{" "}
        Personal
        <div>
          <input
            type="submit"
            value={addOrUpdate}
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
      <div>
        <button className="btn btn-light btn-block" onClick={clearForm}>
          Clear
        </button>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
