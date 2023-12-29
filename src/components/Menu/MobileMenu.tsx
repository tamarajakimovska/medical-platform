import { AppBar, Box, Dialog, DialogContent, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { NavigationMenu } from "./NavigationMenu";
import { BodyMenu } from "./BodyMenu";
import CloseIcon from '@mui/icons-material/Close';

export const MobileMenu = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    return <Box sx={{ flexGrow: 1, zIndex: '99999', '-webkit-transform': 'translate3d(0px, 0px, 0px)' }} position='fixed' width="100%">
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setIsDialogOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <BodyMenu />
            </Toolbar>
        </AppBar>

        <Dialog
            open={isDialogOpen}
            fullWidth
            fullScreen
            onClose={() => setIsDialogOpen(false)}
            style={{ zIndex: '99999' }}
        >
            <DialogContent style={{ backgroundColor: '#fbfbfb' }}>
                <Box display='flex' justifyContent='end' onClick={() => setIsDialogOpen(false)}>
                    <CloseIcon />
                </Box>
                <NavigationMenu width='100%' position='relative' onNavItemClick={() => setIsDialogOpen(false)} />
            </DialogContent>
        </Dialog>
    </Box>
}