import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const { contacts, filter } = useContext(ContactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  let contactsToDisplay = [];

  if (filter !== null) {
    contactsToDisplay = [...filter];
  } else {
    contactsToDisplay = [...contacts];
  }

  const contactItems = contactsToDisplay.map((contact) => {
    return <ContactItem key={contact.id} contact={contact} />;
  });

  return <Fragment>{contactItems}</Fragment>;
};

export default Contacts;
