import { GlobalState } from "../interfaces";
import { updateAppointments, updatePatients } from "../utils";

export enum Actions {
    ADD_PATIENT = 'ADD_PATIENT',
    GET_PATIENTS = 'GET_PATIENTS',
    GET_PATIENTS_SUCCESS = 'GET_PATIENTS_SUCCESS',
    GET_PATIENTS_FAIL = 'GET_PATIENTS_FAIL',
    UPDATE_PATIENT = 'UPDATE_PATIENT',
    DELETE_PATIENT = 'DELETE_PATIENT',
    ADD_APPOINTMENT = 'ADD_APPOINTMENT',
    GET_APPOINTMENTS = 'GET_APPOINTMENTS',
    GET_APPOINTMENTS_SUCCESS = 'GET_APPOINTMENTS_SUCCESS',
    GET_APPOINTMENTS_FAIL = 'GET_APPOINTMENTS_FAIL',
    UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT',
    DELETE_APPOINTMENT = 'DELETE_APPOINTMENT',
    ADD_PAYMENT = 'ADD_PAYMENT',
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
        case Actions.ADD_PATIENT:
            return {
                ...state,
                patients: [
                    ...state.patients,
                    action.payload
                ]
            }
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
            }
        case Actions.UPDATE_PATIENT:
            const updatedPatients = updatePatients(
                state.patients,
                action.payload
            );
            return {
                ...state,
                patients: updatedPatients
            }
        case Actions.DELETE_PATIENT:
            return {
                ...state,
                patients: state.patients.filter((patient) => patient.id !== action.payload.id)
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
        case Actions.ADD_APPOINTMENT:
            return {
                ...state,
                appointments: [
                    ...state.appointments,
                    action.payload
                ]
            }
        case Actions.UPDATE_APPOINTMENT: {
            const updatedAppointments = updateAppointments(
                state.appointments,
                action.payload
            );
            return {
                ...state,
                appointments: updatedAppointments
            }
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
        case Actions.DELETE_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.filter((appointment) => appointment.id !== action.payload.id)
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
        case Actions.ADD_PAYMENT:
            return {
                ...state,
                payments: [
                    ...state.payments,
                    action.payload
                ]
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