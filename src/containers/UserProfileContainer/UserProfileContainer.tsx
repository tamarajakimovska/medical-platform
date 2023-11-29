import { Box } from "@mui/material";
import React from "react";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { UserContactInformation } from "../../components";
import { UserEducation } from "../../components/UserEducation/UserEducation";

export const UserProfileContainer = () => {
    return <Box>
        <Box display={'flex'} justifyContent={'space-between'}>
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
