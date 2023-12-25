import { useContext, useEffect } from "react";
import { Context } from "../context";
import axios from "axios";

export const useGetAppointments = () => {
    const state = useContext(Context);

    useEffect(() => {
        const getAppointments = async () => {
            if (!state.appointments?.length)
                try {
                    state.getAppointments();
                    const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments');

                    state.getAppointmentsSuccess(response.data);
                } catch (error) {
                    state.getAppointmentsFail();
                }
        }

        getAppointments();
    })

    return null;
};
