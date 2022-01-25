import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default function Contacts({contacts, addNewContact, setContacts}) {
  return (
    <div className="contacts container">
      <ContactForm addNewContact={addNewContact}/>
      <ContactList contacts={contacts} setContacts={setContacts}/>
    </div>
  );
}
