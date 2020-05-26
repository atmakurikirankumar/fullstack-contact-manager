import React, { useContext, useRef } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter } = useContext(ContactContext);
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
