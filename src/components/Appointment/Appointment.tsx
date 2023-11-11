import { Box, styled } from "@mui/system";
import React from "react";
import { StringLiteralLike } from "typescript";
import { AppointmentsContainer } from "../../containers";

interface Props {
    image: string;
    name: string;
    email: string;
    date: string;
    visitTime: string;
    number: string;
    doctor: string;
    injury: string;


}

const AppointmentInfoBox = styled('div')({

})

export const Appointment = ({ image, name, email, date, visitTime, number, doctor, injury }: Props) => {
    return <Box display="flex">
        <AppointmentInfoBox>
            <Box> <img src={image} alt="patient" />
                <div>{name}</div>
                <div>{email}</div>
                <div>{date}</div>
                <div>{visitTime}</div>
                <div>{number}</div>
                <div>{doctor}</div>
                <div>{injury}</div>
            </Box>
        </AppointmentInfoBox>
    </Box>
}