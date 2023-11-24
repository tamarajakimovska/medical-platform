import { GlobalState } from "../interfaces";

export enum Actions {
    GET_PATIENTS = 'GET_PATIENTS',
    GET_PATIENTS_SUCCESS = 'GET_PATIENTS_SUCCESS',
    GET_PATIENTS_FAIL = 'GET_PATIENTS_FAIL',
    SET_IS_ADD_PATIENT_DIALOG_OPEN = 'SET_IS_ADD_PATIENT_DIALOG_OPEN',
    SET_DIALOG_MODE = 'SET_DIALOG_MODE',
    SET_DIALOG_PATIENT = 'SET_DIALOG_PATIENT'
};

type Action = {
    type: string;
    payload?: any
};

export const Reducer = (state: GlobalState, action: Action) => {
    switch (action.type) {
        case Actions.GET_PATIENTS:
            return {
                ...state,
                isLoadingPatients: true
            }
        case Actions.GET_PATIENTS_SUCCESS:
            return {
                ...state,
                isLoadingPatients: false,
                patients: action.payload
            }
        case Actions.GET_PATIENTS_FAIL:
            return {
                ...state,
                isLoadingPatients: false,
                // TO-DO: We can add error
            }
        case Actions.SET_IS_ADD_PATIENT_DIALOG_OPEN:
            return {
                ...state,
                isAddPatientDialogOpen: action.payload
            }
        case Actions.SET_DIALOG_MODE:
            return {
                ...state,
                dialogMode: action.payload
            }
        case Actions.SET_DIALOG_PATIENT:
            return {
                ...state,
                dialogPatient: action.payload
            }
        default:
            return state
    }

}