import React, { createContext, useReducer } from "react";
import { GlobalState } from "../interfaces";
import { Actions, Reducer } from "./Reducer";

interface Props {
    children: React.ReactNode;
}

export const initialState: GlobalState = {
    patients: [],
    isLoadingPatients: false,
    isAddPatientDialogOpen: false,
    getPatients: () => null,
    getPatientsSuccess: (patients: any) => null,
    getPatientsFail: () => null,
    setIsAddPatientDialogOpen: () => null
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

    const setIsAddPatientDialogOpen = (isOpen: boolean) => {
        dispatch({ type: Actions.SET_IS_ADD_PATIENT_DIALOG_OPEN, payload: isOpen });
    }

    return <Context.Provider
        value={{
            patients: state.patients,
            isLoadingPatients: state.isLoadingPatients,
            isAddPatientDialogOpen: state.isAddPatientDialogOpen,
            getPatients: () => getPatients(),
            getPatientsSuccess: (patients: any) => getPatientsSuccess(patients),
            getPatientsFail: () => getPatientsFail(),
            setIsAddPatientDialogOpen: (isOpen: boolean) => setIsAddPatientDialogOpen(isOpen)
        }}>
        {children}
    </Context.Provider>
}