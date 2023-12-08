import React, { createContext, useReducer } from "react";
import { GlobalState } from "../interfaces";
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
    dialogPatient: {},
    dialogAppointment: {},
    dialogPayment: {},
    getAppointments: () => null,
    getAppointmentsSuccess: (appointment: any) => null,
    getAppointmentsFail: () => null,
    getPatients: () => null,
    getPayments: () => null,
    getPatientsSuccess: (patients: any) => null,
    getPaymentsSuccess: (payments: any) => null,
    getPatientsFail: () => null,
    getPaymentsFail: () => null,
    setIsAddPatientDialogOpen: () => null,
    setIsAddAppointmentDialogOpen: () => null,
    setIsPaymentDialogOpen: () => null,
    setDialogMode: (mode: 'add' | 'edit') => null,
    setDialogPatient: (patient: any) => null,
    setDialogAppointment: (appointment: any) => null,
    setDialogPayment: (payment: any) => null
}

export const Context = createContext<GlobalState>(initialState);

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const getPatients = () => {
        dispatch({ type: Actions.GET_PATIENTS });
    }

    const getPatientsSuccess = (patients: any) => {
        dispatch({ type: Actions.GET_PATIENTS_SUCCESS, payload: patients });
    }

    const getPatientsFail = () => {
        dispatch({ type: Actions.GET_PATIENTS_FAIL });
    }

    const getAppointments = () => {
        dispatch({ type: Actions.GET_APPOINTMENTS });
    }

    const getAppointmentsSuccess = (appointments: any) => {
        dispatch({ type: Actions.GET_APPOINTMENTS_SUCCESS, payload: appointments });
    }

    const getAppointmentsFail = () => {
        dispatch({ type: Actions.GET_APPOINTMENTS_FAIL });
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

    const setDialogPatient = (patient: any) => {
        dispatch({ type: Actions.SET_DIALOG_PATIENT, payload: patient });
    }

    const setDialogAppointment = (appointment: any) => {
        dispatch({ type: Actions.SET_DIALOG_APPOINTMENT, payload: appointment })
    }

    const setDialogPayment = (payment: any) => {
        dispatch({ type: Actions.SET_DIALOG_PAYMENTS, payload: payment });
    }
    const setIsPaymentDialogOpen = (isOpen: boolean) => {
        dispatch({ type: Actions.SET_IS_PAYMENTS_DIALOG_OPEN, payload: isOpen });
    }
    const getPayments = () => {
        dispatch({ type: Actions.GET_PAYMENTS });
    }
    const getPaymentsSuccess = (payments: any) => {
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
            getPayments: () => getPayments(),
            getPaymentsSuccess: (payments: any) => getPaymentsSuccess(payments),
            getPaymentsFail: () => getPaymentsFail,
            getAppointments: () => getAppointments(),
            getAppointmentsSuccess: (appointments: any) => getAppointmentsSuccess(appointments),
            getAppointmentsFail: () => getAppointmentsFail(),
            getPatients: () => getPatients(),
            getPatientsSuccess: (patients: any) => getPatientsSuccess(patients),
            getPatientsFail: () => getPatientsFail(),
            setIsAddPatientDialogOpen: (isOpen: boolean) => setIsAddPatientDialogOpen(isOpen),
            setIsAddAppointmentDialogOpen: (isOpen: boolean) => setIsAddAppointmentDialogOpen(isOpen),
            setIsPaymentDialogOpen: (isOpen: boolean) => setIsPaymentDialogOpen(isOpen),
            setDialogMode: (mode: 'add' | 'edit') => setDialogMode(mode),
            setDialogPatient: (patient: any) => setDialogPatient(patient),
            setDialogAppointment: (appointment: any) => setDialogAppointment(appointment),
            setDialogPayment: (payment: any) => setDialogPayment(payment)
        }}>
        {children}
    </Context.Provider >
}