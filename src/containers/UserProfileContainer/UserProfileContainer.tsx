import { Box } from "@mui/material";
import React from "react";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { UserContactInformation } from "../../components";
import { UserEducation } from "../../components/UserEducation/UserEducation";

export const UserProfileContainer = () => {
    return <Box
        sx={{
            padding: {
                xs: "0 1.5rem 1.5rem 1.5rem",
                sm: '0'
            }
        }}>
        <Box display={'flex'} justifyContent={'space-between'} sx={{
            flexDirection: {
                xs: 'column',
                sm: 'row'
            },

        }}>
            <Box flexBasis={'45%'}>
                <UserProfile />
            </Box>
            <Box flexBasis={'45%'}>
                <UserEducation />
            </Box>
        </Box>
        <UserContactInformation />
    </Box>
};
