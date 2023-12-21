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
    getAppointments: () => void,
    getAppointmentsSuccess: (appointments: Appointment[]) => void,
    getAppointmentsFail: () => void,
    getPatients: () => void,
    getPatientsSuccess: (patients: Patient[]) => void,
    getPatientsFail: () => void,
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