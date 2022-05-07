import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { ContactComponentProps } from './types';

export default function Contacts({
  contacts,
  addNewContact,
  setContacts,
}: ContactComponentProps): JSX.Element {
  return (
    <div className="contacts container">
      <ContactForm addNewContact={addNewContact} />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}
