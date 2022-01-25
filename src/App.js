import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './app.scss';
import Appointments from './Components/Appointments/Appointments';
import Contacts from './Components/Contacts/Contacts';
import Nav from './Components/Nav';

function App() {
  const [appointments, setAppointments] = useState([]);
  const addNewAppointment = (elem) => {
    setAppointments((prevApp) => {
      return [...prevApp, elem];
    });
  };
  const [contacts, setContacts] = useState([]);

  const addNewContact = (elem) => {
    setContacts((prevCont) => {
      return [...prevCont, elem];
    });
  };
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Contacts contacts={contacts} addNewContact={addNewContact} setContacts={setContacts} />}/>
        <Route path='/appointments' element={<Appointments appointments={appointments} setAppointments={setAppointments} addNewAppointment={addNewAppointment} />}/>
      </Routes>
    </div>
  );
}

export default App;
