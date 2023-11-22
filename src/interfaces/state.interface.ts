export interface GlobalState {
    patients: any[];
    isLoadingPatients: boolean;
    isAddPatientDialogOpen: boolean;
    getPatients: () => void,
    getPatientsSuccess: (patients: any) => void,
    getPatientsFail: () => void,
    setIsAddPatientDialogOpen: (isOpen: boolean) => void,

}