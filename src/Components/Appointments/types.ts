export interface AppointmentProps {
  title?: string;
  date?: string;
  time?: string;
}

export interface AppointmentComponentProps {
  addNewAppointment?: (elem: AppointmentProps) => void;
  setAppointments?: (value: React.SetStateAction<AppointmentProps[]>) => void;
  appointments?: AppointmentProps[];
}
