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

const IconStyle = styled('div')({
    color: 'rgba(51, 108, 251, 0.5)',
    marginRight: '15px',


})

const NameStyle = styled('div')({
    fontFamily: 'Lato, sans - serif',
    fontWeight: '600'

})

const CountStyle = styled('div')({
    fontSize: '20px',
    color: 'rgba(6, 137, 255, 0.8)',
    lineHeight: '1.4'
})

export const DashboardCart = ({ icon, name, count }: Props) => {
    return <Cart>
        <IconStyle>{icon}</IconStyle>
        <Box display={'flex'} flexDirection={'column'}>
            <NameStyle>{name}</NameStyle>
            <CountStyle>{count}</CountStyle>
        </Box>
    </Cart>
};
