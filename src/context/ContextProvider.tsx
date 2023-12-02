import React, { createContext, useReducer } from "react";
import { GlobalState } from "../interfaces";
import { Actions, Reducer } from "./Reducer";

interface Props {
    children: React.ReactNode;
}

export const initialState: GlobalState = {
    appointments: [],
    isLoadingAppointments: false,
    patients: [],
    isLoadingPatients: false,
    isAddPatientDialogOpen: false,
    dialogMode: 'add',
    dialogPatient: {},
    getAppointments: () => null,
    getAppointmentsSuccess: (appointment: any) => null,
    getAppointmentsFail: () => null,
    getPatients: () => null,
    getPatientsSuccess: (patients: any) => null,
    getPatientsFail: () => null,
    setIsAddPatientDialogOpen: () => null,
    setDialogMode: (mode: 'add' | 'edit') => null,
    setDialogPatient: (patient: any) => null
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

    const setDialogMode = (mode: 'add' | 'edit') => {
        dispatch({ type: Actions.SET_DIALOG_MODE, payload: mode })
    }

    const setDialogPatient = (patient: any) => {
        dispatch({ type: Actions.SET_DIALOG_PATIENT, payload: patient });
    }

    console.log('state', state);

    return <Context.Provider
        value={{
            patients: state.patients,
            appointments: state.appointments,
            isLoadingPatients: state.isLoadingPatients,
            isLoadingAppointments: state.isLoadingAppointments,
            isAddPatientDialogOpen: state.isAddPatientDialogOpen,
            dialogMode: state.dialogMode,
            dialogPatient: state.dialogPatient,
            getAppointments: () => getAppointments(),
            getAppointmentsSuccess: (appointments: any) => getAppointmentsSuccess(appointments),
            getAppointmentsFail: () => getAppointmentsFail(),
            getPatients: () => getPatients(),
            getPatientsSuccess: (patients: any) => getPatientsSuccess(patients),
            getPatientsFail: () => getPatientsFail(),
            setIsAddPatientDialogOpen: (isOpen: boolean) => setIsAddPatientDialogOpen(isOpen),
            setDialogMode: (mode: 'add' | 'edit') => setDialogMode(mode),
            setDialogPatient: (patient: any) => setDialogPatient(patient)
        }}>
        {children}
    </Context.Provider >
}