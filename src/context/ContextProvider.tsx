import React, { createContext, useReducer } from "react";
import { Appointment, GlobalState, Patient, Payment } from "../interfaces";
import { Actions, Reducer } from "./Reducer";

interface Props {
    children: React.ReactNode;
}

export const initialState: GlobalState = {
    appointments: [],
    payments: [],
    isLoadingAppointments: false,
    patients: [],
    isLoadingPayments: false,
    isLoadingPatients: false,
    isAddPatientDialogOpen: false,
    isAppointmentDialogOpen: false,
    isPaymentsDialogOpen: false,
    dialogMode: 'add',
    dialogPatient: {} as Patient,
    dialogAppointment: {} as Appointment,
    dialogPayment: {} as Payment,
    addAppointment: (appointment: Appointment) => null,
    getAppointments: () => null,
    getAppointmentsSuccess: (appointment: Appointment[]) => null,
    getAppointmentsFail: () => null,
    updateAppointment: (appointment: Appointment) => null,
    deleteAppointment: (appointment: Appointment) => null,
    addPatient: (patient: Patient) => null,
    getPatients: () => null,
    addPayment: (payment: Payment) => null,
    getPayments: () => null,
    getPatientsSuccess: (patients: Patient[]) => null,
    getPaymentsSuccess: (payments: Payment[]) => null,
    getPatientsFail: () => null,
    getPaymentsFail: () => null,
    updatePatient: (patient: Patient) => null,
    deletePatient: (patient: Patient) => null,
    setIsAddPatientDialogOpen: () => null,
    setIsAddAppointmentDialogOpen: () => null,
    setIsPaymentDialogOpen: () => null,
    setDialogMode: (mode: 'add' | 'edit') => null,
    setDialogPatient: (patient: Patient) => null,
    setDialogAppointment: (appointment: Appointment) => null,
    setDialogPayment: (payment: Payment) => null
}

export const Context = createContext<GlobalState>(initialState);

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const addPatient = (patient: Patient) => {
        dispatch({ type: Actions.ADD_PATIENT, payload: patient })
    }

    const getPatients = () => {
        dispatch({ type: Actions.GET_PATIENTS });
    }

    const getPatientsSuccess = (patients: Patient[]) => {
        dispatch({ type: Actions.GET_PATIENTS_SUCCESS, payload: patients });
    }

    const getPatientsFail = () => {
        dispatch({ type: Actions.GET_PATIENTS_FAIL });
    }

    const updatePatient = (patient: Patient) => {
        dispatch({ type: Actions.UPDATE_PATIENT, payload: patient })
    }

    const deletePatient = (patient: Patient) => {
        dispatch({ type: Actions.DELETE_PATIENT, payload: patient })
    }

    const addAppointment = (appointment: Appointment) => {
        dispatch({ type: Actions.ADD_APPOINTMENT, payload: appointment });
    }

    const updateAppointment = (appointment: Appointment) => {
        dispatch({ type: Actions.UPDATE_APPOINTMENT, payload: appointment });
    }

    const getAppointments = () => {
        dispatch({ type: Actions.GET_APPOINTMENTS });
    }

    const getAppointmentsSuccess = (appointments: Appointment[]) => {
        dispatch({ type: Actions.GET_APPOINTMENTS_SUCCESS, payload: appointments });
    }

    const getAppointmentsFail = () => {
        dispatch({ type: Actions.GET_APPOINTMENTS_FAIL });
    }

    const deleteAppointment = (appointment: Appointment) => {
        dispatch({ type: Actions.DELETE_APPOINTMENT, payload: appointment })
    }

    const setIsAddPatientDialogOpen = (isOpen: boolean) => {
        dispatch({ type: Actions.SET_IS_ADD_PATIENT_DIALOG_OPEN, payload: isOpen });
    }

    const setIsAddAppointmentDialogOpen = (isOpen: boolean) => {
        dispatch({ type: Actions.SET_IS_APPOINTMENT_DIALOG_OPEN, payload: isOpen });
    }

    const setDialogMode = (mode: 'add' | 'edit') => {
        dispatch({ type: Actions.SET_DIALOG_MODE, payload: mode })
    }

    const setDialogPatient = (patient: Patient) => {
        dispatch({ type: Actions.SET_DIALOG_PATIENT, payload: patient });
    }

    const setDialogAppointment = (appointment: Appointment) => {
        dispatch({ type: Actions.SET_DIALOG_APPOINTMENT, payload: appointment })
    }

    const setDialogPayment = (payment: Payment) => {
        dispatch({ type: Actions.SET_DIALOG_PAYMENTS, payload: payment });
    }

    const setIsPaymentDialogOpen = (isOpen: boolean) => {
        dispatch({ type: Actions.SET_IS_PAYMENTS_DIALOG_OPEN, payload: isOpen });
    }

    const addPayment = (payment: Payment) => {
        dispatch({ type: Actions.ADD_PAYMENT, payload: payment })
    }

    const getPayments = () => {
        dispatch({ type: Actions.GET_PAYMENTS });
    }

    const getPaymentsSuccess = (payments: Payment[]) => {
        dispatch({ type: Actions.GET_PAYMENTS_SUCCESS, payload: payments });
    }

    const getPaymentsFail = () => {
        dispatch({ type: Actions.GET_PAYMENTS_FAIL })
    }

    console.log('state', state);

    return <Context.Provider
        value={{
            payments: state.payments,
            patients: state.patients,
            appointments: state.appointments,
            isLoadingPayments: state.isLoadingPayments,
            isLoadingPatients: state.isLoadingPatients,
            isLoadingAppointments: state.isLoadingAppointments,
            isPaymentsDialogOpen: state.isPaymentsDialogOpen,
            isAddPatientDialogOpen: state.isAddPatientDialogOpen,
            isAppointmentDialogOpen: state.isAppointmentDialogOpen,
            dialogMode: state.dialogMode,
            dialogPatient: state.dialogPatient,
            dialogAppointment: state.dialogAppointment,
            dialogPayment: state.dialogPayment,
            addPayment: (payment: Payment) => addPayment(payment),
            getPayments: () => getPayments(),
            getPaymentsSuccess: (payments: Payment[]) => getPaymentsSuccess(payments),
            getPaymentsFail: () => getPaymentsFail,
            addAppointment: (appointment: Appointment) => addAppointment(appointment),
            getAppointments: () => getAppointments(),
            getAppointmentsSuccess: (appointments: Appointment[]) => getAppointmentsSuccess(appointments),
            getAppointmentsFail: () => getAppointmentsFail(),
            deleteAppointment: (appointment: Appointment) => deleteAppointment(appointment),
            updateAppointment: (appointment: Appointment) => updateAppointment(appointment),
            addPatient: (patient: Patient) => addPatient(patient),
            getPatients: () => getPatients(),
            getPatientsSuccess: (patients: Patient[]) => getPatientsSuccess(patients),
            getPatientsFail: () => getPatientsFail(),
            updatePatient: (patient: Patient) => updatePatient(patient),
            deletePatient: (patient: Patient) => deletePatient(patient),
            setIsAddPatientDialogOpen: (isOpen: boolean) => setIsAddPatientDialogOpen(isOpen),
            setIsAddAppointmentDialogOpen: (isOpen: boolean) => setIsAddAppointmentDialogOpen(isOpen),
            setIsPaymentDialogOpen: (isOpen: boolean) => setIsPaymentDialogOpen(isOpen),
            setDialogMode: (mode: 'add' | 'edit') => setDialogMode(mode),
            setDialogPatient: (patient: Patient) => setDialogPatient(patient),
            setDialogAppointment: (appointment: Appointment) => setDialogAppointment(appointment),
            setDialogPayment: (payment: Payment) => setDialogPayment(payment)
        }}>
        {children}
    </Context.Provider >
}