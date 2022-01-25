import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function AppointmentsForm({ addNewAppointment }) {
  const [appTitle, setAppTitle] = useState('');
  const [appDate, setAppDate] = useState('2022-01-25');
  const [appTime, setAppTime] = useState('10:00');
  
  const addNewItem = () => {
    addNewAppointment({ title: appTitle, date: appDate, time: appTime });
    setAppTitle('');
    setAppDate('2022-01-25');
    setAppTime('10:00');
  };

  return (
    <div className="form">
      <h2 className="form-title">Add New Appointment</h2>
      <div className="form-send">
        <TextField
          id="filled-required"
          label="Title"
          value={appTitle}
          variant="filled"
          onChange={(e) => {
            setAppTitle(e.target.value);
          }}
        />
        <TextField
          id="filled-required"
          label="Date"
          value={appDate}
          variant="filled"
          type='date'
          onChange={(e) => {
            setAppDate(e.target.value);
          }}
        />
        <TextField
          id="filled-required"
          label="Time"
          type='time'
          value={appTime}
          variant="filled"
          onChange={(e) => {
            setAppTime(e.target.value);
          }}
        />
        <Button variant="contained" onClick={addNewItem}>
          Add Appointment
        </Button>
      </div>
    </div>
  );
}
