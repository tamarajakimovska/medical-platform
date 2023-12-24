import { Appointment, Patient, Payment } from ".";

export interface GlobalState {
    patients: Patient[];
    appointments: Appointment[];
    payments: Payment[];
    isLoadingPatients: boolean;
    isLoadingAppointments: boolean;
    isLoadingPayments: boolean;
    isAddPatientDialogOpen: boolean;
    isAppointmentDialogOpen: boolean;
    isPaymentsDialogOpen: boolean;
    dialogMode: 'add' | 'edit';
    dialogPatient: Patient;
    dialogAppointment: Appointment;
    dialogPayment: Payment;
    addAppointment: (appointment: Appointment) => void,
    getAppointments: () => void,
    getAppointmentsSuccess: (appointments: Appointment[]) => void,
    getAppointmentsFail: () => void,
    updateAppointment: (appointment: Appointment) => void,
    deleteAppointment: (appointment: Appointment) => void,
    addPatient: (patient: Patient) => void,
    getPatients: () => void,
    getPatientsSuccess: (patients: Patient[]) => void,
    getPatientsFail: () => void,
    updatePatient: (patient: Patient) => void,
    deletePatient: (patient: Patient) => void,
    addPayment: (payment: Payment) => void,
    getPayments: () => void,
    getPaymentsSuccess: (payments: Payment[]) => void,
    getPaymentsFail: () => void,
    setIsAddPatientDialogOpen: (isOpen: boolean) => void,
    setIsAddAppointmentDialogOpen: (isOpen: boolean) => void,
    setIsPaymentDialogOpen: (isOpen:boolean) => void,
    setDialogMode: (mode: 'add' | 'edit') => void;
    setDialogPatient: (patient: Patient) => void;
    setDialogAppointment: (appointment: Appointment) => void;
    setDialogPayment: (payment: Payment) => void;
}