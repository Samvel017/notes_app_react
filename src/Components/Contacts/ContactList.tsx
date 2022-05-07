import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContactComponentProps } from './types';

export default function ContactList({
  contacts,
  setContacts,
}: ContactComponentProps): JSX.Element {
  return (
    <div className="list-container">
      <h2 className="list-title">Contacts</h2>
      <div className="list">
        {contacts &&
          contacts.map((el, index) => {
            return (
              <div className="list-item" key={index}>
                <div className="list-info">
                  <h2>Name: {el.name}</h2>
                  <h4>Phone: {el.phone}</h4>
                  <h5>Email: {el.email}</h5>
                </div>
                <div className="list-buttons">
                  <Button
                    color="error"
                    onClick={() => {
                      setContacts &&
                        setContacts(contacts.filter((elem) => elem !== el));
                    }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
