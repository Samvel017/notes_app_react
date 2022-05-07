import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Appointments from './Components/Appointments/Appointments';
import Contacts from './Components/Contacts/Contacts';
import Nav from './Components/Nav';
import { AppointmentProps } from './Components/Appointments/types';
import { ContactProps } from './Components/Contacts/types';
import './app.scss';

function App(): JSX.Element {
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [contacts, setContacts] = useState<ContactProps[]>([]);

  const addNewAppointment = (elem: AppointmentProps) => {
    setAppointments((prevApp) => {
      return [...prevApp, elem];
    });
  };

  const addNewContact = (elem: ContactProps) => {
    setContacts((prevCont) => {
      return [...prevCont, elem];
    });
  };
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Contacts
              contacts={contacts}
              addNewContact={addNewContact}
              setContacts={setContacts}
            />
          }
        />
        <Route
          path="/appointments"
          element={
            <Appointments
              appointments={appointments}
              setAppointments={setAppointments}
              addNewAppointment={addNewAppointment}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
