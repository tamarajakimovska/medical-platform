import { Appointment } from "../interfaces";

export function updateAppointments(
  appointments: Appointment[],
  appointmentToBeUpdated: Appointment
) {
  const updatedAppointments = appointments.map((appointment) => {
    return appointment.id === appointmentToBeUpdated.id
      ? appointmentToBeUpdated
      : appointment;
  });

  return updatedAppointments;
};
