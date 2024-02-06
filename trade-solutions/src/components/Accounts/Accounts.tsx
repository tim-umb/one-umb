import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from '@emotion/styled';
import { Icon } from '@mui/material';
import { MenuButtonProps } from 'src/types';

const MenuButton: any = styled(Button)(({ theme, ...props }: any) => ({
    color: theme.palette['text']['secondary'],
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette['text']['primary'],
    }
}));

const MenuIcon: any = styled(Icon)(({ theme }: any) => ({
    marginLeft: theme.spacing(1),
}));

export default function Accounts(props: MenuButtonProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <MenuButton
                id="basic-button1"
                aria-controls={open ? 'basic-menu1' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Accounts
                <MenuIcon>
                    <KeyboardArrowDownIcon sx={{ fontSize: 'large' }} />
                </MenuIcon>
            </MenuButton>
            <Menu
                id="basic-menu1"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button1',
                }}
            >
                <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
                <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
                <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
            </Menu>
        </>
    );
}