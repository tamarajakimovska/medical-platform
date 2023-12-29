import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { NavigationMenu } from "./NavigationMenu";
import { BodyMenu } from "./BodyMenu";

export const MobileMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    return <Box sx={{ flexGrow: 1, zIndex: '99999' }} position='fixed' width="100%">
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setMenuOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <BodyMenu />
            </Toolbar>
        </AppBar>

        <Drawer
            anchor={'left'}
            open={isMenuOpen}
            onClose={() => setMenuOpen(false)}
        >
            <NavigationMenu onNavItemClick={() => setMenuOpen(false)} />
        </Drawer>
    </Box>
}