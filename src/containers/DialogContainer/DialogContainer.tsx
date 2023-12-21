import * as React from 'react';
import { Context } from '../../context';
import axios from 'axios';
import { AppointmentDialog, PatientDialog, PaymentDialog } from '../../components';
import { useId } from 'react';
import { Appointment, Patient, Payment } from '../../interfaces';

export const DialogContainer = () => {
    const state = React.useContext(Context);
    const id = useId();

    const onAddPatient = async (patient: Patient) => {
        const response = await axios.post('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients', {
            image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: patient.name,
            age: patient.age,
            adress: patient.adress,
            number: patient.number,
            id: patient.id
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

    const onAddAppointment = async (appointment: Appointment) => {

        console.log("ON ADD", appointment)
        const response = await axios.post('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments', {
            image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: appointment.name,
            email: appointment.email,
            date: appointment.date,
            visitTime: appointment.visitTime,
            number: appointment.number,
            doctor: appointment.doctor,
            injury: appointment.injury,
            id
        })


        // Close the dialog
        if (response.status === 201) {
            state.setIsAddAppointmentDialogOpen(false);
            // TO-DO: Create a hook for Refetch the patients
            try {
                state.getAppointments();
                const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments');

                state.getAppointmentsSuccess(response.data);
            } catch (error) {
                state.getAppointmentsFail();
            }
        }
    }

    const onAddPayment = async (payment: Payment) => {

        const response = await axios.post('https://6555e1d584b36e3a431e8f4f.mockapi.io/payments', {
            bill: payment.bill,
            patient: payment.patient,
            doctor: payment.doctor,
            date: payment.date,
            charges: payment.charges,
            tax: payment.tax,
            discount: payment.discount,
            total: payment.total
        })

        if (response.status === 201) {
            state.setIsPaymentDialogOpen(false);
            try {
                state.getPayments();
                const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/payments');

                state.getPaymentsSuccess(response.data);
            } catch (error) {
                state.getPaymentsFail();
            }
        }
    }


    const onEditPatient = async (patient: Patient) => {
        console.log('patient', patient);
        try {
            const response = await axios.put(`https://6555e1d584b36e3a431e8f4f.mockapi.io/patients/${patient.id}`, {
                ...patient
            });
            console.log('Success', response);
        } catch {
            console.log('Fail');
        } finally {
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

    const onEditAppointment = async (appointment: Appointment) => {
        try {
            const response = await axios.put(`https://6554a22a63cafc694fe6bb57.mockapi.io/appointments/${appointment.id}`, {
                ...appointment
            });
        } catch {
            console.log('Fail')
        } finally {
            state.setIsAddAppointmentDialogOpen(false);
            try {
                state.getAppointments();
                const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments');

                state.getAppointmentsSuccess(response.data);
            } catch (error) {
                state.getAppointmentsFail();
            }
        }
    }

    const onDialogClose = () => {
        state.setIsAddPatientDialogOpen(false)
        state.setDialogPatient({} as Patient);
    }

    const onAppointmentDialogClose = () => {
        state.setIsAddAppointmentDialogOpen(false)
        state.setDialogAppointment({} as Appointment);
    }

    const onPaymentDialogClose = () => {
        state.setIsPaymentDialogOpen(false)
        state.setDialogPayment({} as Payment);
    }
    return (
        <React.Fragment>
            <PatientDialog
                isOpen={state.isAddPatientDialogOpen}
                mode={state.dialogMode}
                patient={state.dialogPatient}
                onClose={() => onDialogClose()}
                onSubmit={(patient: Patient) => state.dialogMode === 'add' ? onAddPatient(patient) : onEditPatient(patient)}
            />
            <AppointmentDialog
                isOpen={state.isAppointmentDialogOpen}
                mode={state.dialogMode}
                appointment={state.dialogAppointment}
                onClose={() => onAppointmentDialogClose()}
                onSubmit={(appointment: Appointment) => state.dialogMode === 'add' ? onAddAppointment(appointment) : onEditAppointment(appointment)}

            />
            <PaymentDialog
                isOpen={state.isPaymentsDialogOpen}
                mode="add"
                payment={state.dialogPayment}
                onClose={() => onPaymentDialogClose()}
                onSubmit={(payment: Payment) => onAddPayment(payment)}
            />

        </React.Fragment>
    );
}