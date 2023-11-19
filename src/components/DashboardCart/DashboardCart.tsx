import { Box, styled } from "@mui/material";
import React from "react";

interface Props {
    icon: any;
    name: string;
    count: number;
}

const Cart = styled('div')({
    boxShadow: '0 18px 34px rgba(0, 0, 0, .12)',
    borderRadius: '6px',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    flexBasis: '20%',
    width: '100%'
})

export const DashboardCart = ({ icon, name, count }: Props) => {
    return <Cart>
        <Box mr={5}>{icon}</Box>
        <Box display={'flex'} flexDirection={'column'}>
            <Box>{name}</Box>
            <Box>{count}</Box>
        </Box>
    </Cart>
};
