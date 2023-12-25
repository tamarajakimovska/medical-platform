import { useContext, useEffect } from "react";
import { Context } from "../context";
import axios from "axios";

export const useGetPatients = () => {
    const state = useContext(Context);

    useEffect(() => {
        const getPatients = async () => {
            if (!state.patients.length)
                try {
                    state.getPatients();
                    const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

                    state.getPatientsSuccess(response.data);
                } catch (error) {
                    state.getPatientsFail();
                }
        }

        getPatients();
    }, [state.patients.length])

    return null;
};
