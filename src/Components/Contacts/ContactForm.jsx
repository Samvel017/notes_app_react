import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ContactForm({ addNewContact }) {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  
  const addNewItem = () => {
    addNewContact({
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    });
    setContactName('');
    setContactPhone('');
    setContactEmail('');
  };
  return (
    <div className="form">
      <h2 className="form-title">Add New Contact</h2>
      <div className="form-send">
        <TextField
          id="filled-required"
          label="Name"
          variant="filled"
          type="text"
          value={contactName}
          onChange={(e) => {
            setContactName(e.target.value);
          }}
        />
        <TextField
          id="filled-required"
          label="Phone"
          variant="filled"
          type="number"
          value={contactPhone}
          onChange={(e) => {
            setContactPhone(e.target.value);
          }}
        />
        <TextField
          id="filled-required"
          label="Email"
          variant="filled"
          type="email"
          value={contactEmail}
          onChange={(e) => {
            setContactEmail(e.target.value);
          }}
        />
        <Button variant="contained" onClick={addNewItem}>
          Add Contact
        </Button>
      </div>
    </div>
  );
}
