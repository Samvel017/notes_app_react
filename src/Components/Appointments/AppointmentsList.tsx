import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { AppointmentComponentProps } from './types';

export default function AppointmentsList({
  appointments,
  setAppointments,
}: AppointmentComponentProps): JSX.Element {
  return (
    <div className="list-container">
      <h2 className="list-title">Appointments</h2>
      <div className="list">
        {appointments &&
          appointments.map((el, index) => {
            return (
              <div className="list-item" key={index}>
                <div className="list-info">
                  <h2>Title: {el.title}</h2>
                  <h4>Date: {el.date}</h4>
                  <h5>Time: {el.time}</h5>
                </div>
                <div className="list-buttons">
                  <Button
                    color="error"
                    onClick={() => {
                      setAppointments &&
                        setAppointments(
                          appointments.filter((elem) => elem !== el)
                        );
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
