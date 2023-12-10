import { Box, Divider, Menu, MenuItem } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import image from '../../images/userImage.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';

interface Props {
    isOpen?: boolean;
    onClose: () => void;
}

export const UserMenu = ({ isOpen, onClose }: Props) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRedirect = (redirectionUrl: string) => {
        handleClose();
        navigate(redirectionUrl);
    }

    return <Fragment>
        <Box onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
            <img src={image} alt="profile" width={'38px'} height={'38px'} style={{ borderRadius: '50%' }} />
        </Box>

        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={() => handleClose()}
            onClick={() => handleClose()}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 55 }}
        >
            <MenuItem onClick={() => handleRedirect('/account')}>
                <ManageAccountsIcon style={{ fontSize: '28px', marginRight: '12px', backgroundColor: '#E8E8E8', padding: '12px', borderRadius: '50%' }} />
                Edit Account
            </MenuItem>
            <MenuItem onClick={() => handleRedirect('/user')}>
                <AccountCircleIcon style={{ fontSize: '28px', marginRight: '12px', backgroundColor: '#E8E8E8', padding: '12px', borderRadius: '50%' }} />  User Profile
            </MenuItem>
            <MenuItem onClick={() => handleRedirect('/logout')}>
                <LogoutIcon style={{ fontSize: '28px', marginRight: '12px', backgroundColor: '#E8E8E8', padding: '12px', borderRadius: '50%' }} />  Log Out
            </MenuItem>
        </Menu>
    </Fragment>
}

// function printHello() {}
// Hello 

// function printHello(name) {}
// Hello `${name}` 
// -> Hello Tamara
// -> Goodbye

// function printHello(name) {}
// Hello `${name}` 
// -> Hello Nikola
// -> Goodbye
