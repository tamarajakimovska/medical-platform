import { Patient } from "../interfaces";

export function updatePatients(
  patients: Patient[],
  patientToBeUpdated: Patient
) {
  const updatedPatients = patients.map((patient) => {
    return patient.id === patientToBeUpdated.id
      ? patientToBeUpdated
      : patient;
  });

  return updatedPatients;
};
