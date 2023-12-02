export interface GlobalState {
    patients: any[];
    appointments: any[]
    isLoadingPatients: boolean;
    isLoadingAppointments: boolean;
    isAddPatientDialogOpen: boolean;
    dialogMode: 'add' | 'edit';
    dialogPatient: any;
    getAppointments: () => void,
    getAppointmentsSuccess: (appointments: any) => void,
    getAppointmentsFail: () => void,
    getPatients: () => void,
    getPatientsSuccess: (patients: any) => void,
    getPatientsFail: () => void,
    setIsAddPatientDialogOpen: (isOpen: boolean) => void,
    setDialogMode: (mode: 'add' | 'edit') => void;
    setDialogPatient: (patient: any) => void;
}