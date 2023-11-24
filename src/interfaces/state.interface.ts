export interface GlobalState {
    patients: any[];
    isLoadingPatients: boolean;
    isAddPatientDialogOpen: boolean;
    dialogMode: 'add' | 'edit';
    dialogPatient: any;
    getPatients: () => void,
    getPatientsSuccess: (patients: any) => void,
    getPatientsFail: () => void,
    setIsAddPatientDialogOpen: (isOpen: boolean) => void,
}