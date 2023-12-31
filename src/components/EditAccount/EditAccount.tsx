import { Box, TextField } from "@mui/material";
import React from "react";

export const EditAccount = () => {
    return <Box pt={5} >
        <Box>
            <Box display={'flex'} sx={{
                width: {
                    xs: '100%',
                    sm: '50%'
                }
            }}>
                <Box mr={2}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="FirstName"
                        label="First Name"
                        type="First Name"
                        variant="standard"
                        value='Tamara'
                    />
                </Box>

                <TextField
                    autoFocus
                    margin="dense"
                    id="LastName"
                    label="Last Name"
                    type="Last Name"
                    variant="standard"
                    value='Jakimovska'
                />
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '30%'
                }
            }}>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    id="Age"
                    label="Age"
                    type="Age"
                    variant="standard"
                    value='21'
                />
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '30%'
                }
            }}>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    id="Gender"
                    label="Gender"
                    type="Gender"
                    variant="standard"
                    value='Female'
                />
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '30%'
                }
            }}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Phone number"
                    label="Phone number"
                    type="Phone number"
                    variant="standard"
                    value='0178 1432889'
                />
            </Box>
            <Box sx={{
                width: {
                    xs: '100%',
                    sm: '30%'
                }
            }}>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    id="Address"
                    label="Address"
                    type="Address"
                    variant="standard"
                    value='Berlin, Germany'
                />
            </Box>
        </Box>
    </Box>
}