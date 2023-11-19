export interface GlobalState {
    patients: any[];
    isLoadingPatients: boolean;
    getPatients: () => void,
    getPatientsSuccess: (patients: any) => void,
    getPatientsFail: () => void,
}