import React from "react";
import user from "../../images/userImage.jpeg";
import background from "../../images/userBackround1.jpeg";
import { Box, styled } from "@mui/material";

const FullName = styled('div')({
    fontFamily: "Lato, sans- serif",
    fontWeight: "700"
})

const JobTitle = styled('div')({
    color: "rgb(143, 143, 144)",

})

export const UserProfile = () => {
    return <Box style={{ backgroundColor: '#FBFBFB', boxShadow: '0 18px 34px rgba(0, 0, 0, .12)' }} width={'100%'} height={'42vh'} borderRadius={'2%'} >
        <img src={background} alt="background" width={'100%'} height={'52%'} style={{ borderRadius: '2%' }} />
        <Box mt={'-50px'} mx={3} >
            <img src={user} alt="user" width={'98px'} height={'98px'} style={{ borderRadius: '50%' }} />
            <FullName>Tamara Jakimovska</FullName>
            <JobTitle>Junior Frontend Developer</JobTitle>
            <p>My stack is currently based around JavaScript/React/TypeScript, but I am open to engage with other technologies as well.</p>
        </Box>
    </Box>
}