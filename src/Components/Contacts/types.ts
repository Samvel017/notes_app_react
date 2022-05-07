export interface ContactProps {
  name: string;
  phone: string;
  email: string;
}

export interface ContactComponentProps {
  contacts?: ContactProps[];
  addNewContact?: (elem: ContactProps) => void;
  setContacts?: (value: React.SetStateAction<ContactProps[]>) => void;
}
