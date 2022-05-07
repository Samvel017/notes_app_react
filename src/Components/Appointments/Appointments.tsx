import AppointmentsForm from './AppointmentsForm';
import AppointmentsList from './AppointmentsList';
import { AppointmentComponentProps } from './types';

export default function Appointments({
  appointments,
  setAppointments,
  addNewAppointment,
}: AppointmentComponentProps): JSX.Element {
  return (
    <div className="appointments container">
      <AppointmentsForm addNewAppointment={addNewAppointment} />
      <AppointmentsList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  );
}
