import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { ContactComponentProps } from './types';

export default function ContactForm({
  addNewContact,
}: ContactComponentProps): JSX.Element {
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');

  const addNewItem = () => {
    if (contactName && contactPhone && contactEmail) {
      addNewContact &&
        addNewContact({
          name: contactName,
          phone: contactPhone,
          email: contactEmail,
        });
      setContactName('');
      setContactPhone('');
      setContactEmail('');
    }
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
