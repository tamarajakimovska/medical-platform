export interface GlobalState {
    patients: any[];
    appointments: any[];
    payments: any[];
    isLoadingPatients: boolean;
    isLoadingAppointments: boolean;
    isLoadingPayments: boolean;
    isAddPatientDialogOpen: boolean;
    isAppointmentDialogOpen: boolean;
    isPaymentsDialogOpen: boolean;
    dialogMode: 'add' | 'edit';
    dialogPatient: any;
    dialogAppointment: any;
    dialogPayment: any;
    getAppointments: () => void,
    getAppointmentsSuccess: (appointments: any) => void,
    getAppointmentsFail: () => void,
    getPatients: () => void,
    getPatientsSuccess: (patients: any) => void,
    getPatientsFail: () => void,
    getPayments: () => void,
    getPaymentsSuccess: (payments: any) => void,
    getPaymentsFail: () => void,
    setIsAddPatientDialogOpen: (isOpen: boolean) => void,
    setIsAddAppointmentDialogOpen: (isOpen: boolean) => void,
    setIsPaymentDialogOpen: (isOpen:boolean) => void,
    setDialogMode: (mode: 'add' | 'edit') => void;
    setDialogPatient: (patient: any) => void;
    setDialogAppointment: (appointment: any) => void;
    setDialogPayment: (payment: any) => void;
}