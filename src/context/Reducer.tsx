import { GlobalState } from "../interfaces";

export enum Actions {
    GET_PATIENTS = 'GET_PATIENTS',
    GET_PATIENTS_SUCCESS = 'GET_PATIENTS_SUCCESS',
    GET_PATIENTS_FAIL = 'GET_PATIENTS_FAIL'
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
        default:
            return state
    }

}