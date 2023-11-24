import * as React from 'react';
import { Context } from '../../context';
import axios from 'axios';
import { PatientDialog } from '../../components';

export const DialogContainer = () => {
    const state = React.useContext(Context);

    const onAddPatient = async (patient: any) => {
        const response = await axios.post('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients', {
            image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: patient.name,
            age: patient.age,
            adress: patient.address,
            number: patient.number
        })

        // Close the dialog
        if (response.status === 201) {
            state.setIsAddPatientDialogOpen(false);
            // TO-DO: Create a hook for Refetch the patients
            try {
                state.getPatients();
                const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

                state.getPatientsSuccess(response.data);
            } catch (error) {
                state.getPatientsFail();
            }
        }
    }

    const onDialogClose = () => {
        state.setIsAddPatientDialogOpen(false)
        state.setDialogPatient({});
    }

    return (
        <React.Fragment>
            <PatientDialog
                isOpen={state.isAddPatientDialogOpen}
                mode={state.dialogMode}
                patient={state.dialogPatient}
                onClose={() => onDialogClose()}
                onSubmit={(patient: any) => state.dialogMode === 'add' ? onAddPatient(patient) : null}
            />
        </React.Fragment>
    );
}