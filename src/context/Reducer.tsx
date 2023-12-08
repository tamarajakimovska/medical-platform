import { GlobalState } from "../interfaces";

export enum Actions {
    GET_PATIENTS = 'GET_PATIENTS',
    GET_PATIENTS_SUCCESS = 'GET_PATIENTS_SUCCESS',
    GET_PATIENTS_FAIL = 'GET_PATIENTS_FAIL',
    GET_APPOINTMENTS = 'GET_APPOINTMENTS',
    GET_APPOINTMENTS_SUCCESS = ' GET_APPOINTMENTS_SUCCESS',
    GET_APPOINTMENTS_FAIL = ' GET_APPOINTMENTS_FAIL',
    GET_PAYMENTS = 'GET_PAYMENTS',
    GET_PAYMENTS_SUCCESS = ' GET_PAYMENTS_SUCCESS',
    GET_PAYMENTS_FAIL = 'GET_PAYMENTS_FAIL',
    SET_IS_ADD_PATIENT_DIALOG_OPEN = 'SET_IS_ADD_PATIENT_DIALOG_OPEN',
    SET_IS_APPOINTMENT_DIALOG_OPEN = '   SET_IS_APPOINTMENT_DIALOG_OPEN',
    SET_IS_PAYMENTS_DIALOG_OPEN = 'SET_IS_PAYMENTS_DIALOG_OPEN',
    SET_DIALOG_MODE = 'SET_DIALOG_MODE',
    SET_DIALOG_PATIENT = 'SET_DIALOG_PATIENT',
    SET_DIALOG_APPOINTMENT = 'SET_DIALOG_APPOINTMENT',
    SET_DIALOG_PAYMENTS = 'SET_DIALOG_PAYMENTS'
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
        case Actions.GET_APPOINTMENTS:
            return {
                ...state,
                isLoadingAppointments: true
            }
        case Actions.GET_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                isLoadingAppointments: false,
                appointments: action.payload
            }
        case Actions.GET_APPOINTMENTS_FAIL:
            return {
                ...state,
                isLoadingAppointments: false
            }
        case Actions.SET_IS_APPOINTMENT_DIALOG_OPEN:
            return {
                ...state,
                isAppointmentDialogOpen: action.payload
            }
        case Actions.SET_DIALOG_APPOINTMENT:
            return {
                ...state,
                dialogAppointment: action.payload
            }
        case Actions.GET_PAYMENTS:
            return {
                ...state,
                isLoadingPayments: true
            }
        case Actions.GET_PAYMENTS_SUCCESS:
            return {
                ...state,
                isLoadingPayments: false,
                payments: action.payload
            }
        case Actions.GET_PAYMENTS_FAIL:
            return {
                ...state,
                isLoadingPayments: false
            }
        case Actions.SET_DIALOG_PAYMENTS:
            return {
                ...state,
                dialogPayment: action.payload
            }
        case Actions.SET_IS_PAYMENTS_DIALOG_OPEN:
            return {
                ...state,
                isPaymentsDialogOpen: action.payload
            }
        default:
            return state
    }

}