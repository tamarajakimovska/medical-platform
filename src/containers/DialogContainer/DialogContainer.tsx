import * as React from 'react';
import { Context } from '../../context';
import { AppointmentDialog, PatientDialog, PaymentDialog } from '../../components';
import { Appointment, Patient, Payment } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';


export const DialogContainer = () => {
    const state = React.useContext(Context);

    const onAddPatient = async (patient: Patient) => {
        const id = uuidv4();
        const date = new Date();

        state.addPatient({
            image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: patient.name,
            age: patient.age,
            adress: patient.adress,
            number: patient.number,
            id,
            gender: patient.gender,
            email: patient.email,
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
            lastVisit: '',
            visitTime: patient.visitTime,
            doctor: patient.doctor,
            injury: patient.injury
        });

        state.setIsAddPatientDialogOpen(false);
    }

    const onAddAppointment = async (appointment: Appointment) => {
        const id = uuidv4();
        const date = new Date();

        state.addAppointment({
            image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: appointment.name,
            age: appointment.age,
            adress: appointment.adress,
            number: appointment.number,
            id,
            gender: appointment.gender,
            email: appointment.email,
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
            lastVisit: '',
            visitTime: appointment.visitTime,
            doctor: appointment.doctor,
            injury: appointment.injury
        });
        state.setIsAddAppointmentDialogOpen(false);
    }

    const onAddPayment = async (payment: Payment) => {
        state.addPayment({
            bill: payment.bill,
            patient: payment.patient,
            doctor: payment.doctor,
            date: payment.date,
            charges: payment.charges,
            tax: payment.tax,
            discount: payment.discount,
            total: payment.total
        })
        state.setIsPaymentDialogOpen(false);
    }

    const onEditPatient = async (patient: Patient) => {
        state.updatePatient(patient);
        state.setIsAddPatientDialogOpen(false);
    }

    const onEditAppointment = async (appointment: Appointment) => {
        state.updateAppointment(appointment);
        state.setIsAddAppointmentDialogOpen(false);
    }

    const onDialogClose = () => {
        state.setIsAddPatientDialogOpen(false)
        state.setDialogPatient({} as Patient);
        state.setDialogMode('add');
    }

    const onAppointmentDialogClose = () => {
        state.setIsAddAppointmentDialogOpen(false)
        state.setDialogAppointment({} as Appointment);
        state.setDialogMode('add');
    }

    const onPaymentDialogClose = () => {
        state.setIsPaymentDialogOpen(false)
        state.setDialogPayment({} as Payment);
        state.setDialogMode('add');
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