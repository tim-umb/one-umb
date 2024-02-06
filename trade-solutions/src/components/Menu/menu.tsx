import * as React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Icon } from '@mui/material';
import { MenuButtonProps } from 'src/types';
import Dashboard from '../Dashboard/Dashboard';
import Accounts from '../Accounts/Accounts';
import Payments from '../Payments/Payments';
import Reports from '../Reports/Reports';
import Administration from '../Administration/Administration';


const TopMenuContainer: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `flex-start`,
    width: '100%',
    padding: `8px 0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
  });

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

export default function TopMenuItem(props: MenuButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
     <TopMenuContainer>
      <Dashboard></Dashboard>
      <Accounts></Accounts>
      <Payments></Payments>
      <Reports></Reports>
      <Administration></Administration>
      </TopMenuContainer>
  );
}