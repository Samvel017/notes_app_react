import React from 'react';
import AppointmentsForm from './AppointmentsForm';
import AppointmentsList from './AppointmentsList';

export default function Appointments({
  appointments,
  setAppointments,
  addNewAppointment,
}) {
 
  return (
    <div className="appointments container">
      <AppointmentsForm
        addNewAppointment={addNewAppointment}
      />
      <AppointmentsList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  );
}
