import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import Vector5Image from 'src/assets/images/mainPage_Vector_5.png';
import { styled } from '@mui/material/styles';
import PrintIcon from '@mui/icons-material/Print';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMark';
import RefreshOutlinedIcon from '@mui/icons-material/Refresh';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Link1Props, PageHeaderProps } from 'src/types';
import { MenuButtonProps } from 'src/types';
import { Box, DialogActions, DialogContent, Divider, ListItem, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Frame30: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    flex: `1`,
    margin: `0px`,
});

const Icon6: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
});

const CompareArrowsFilled: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `35px`,
    height: `35px`,
    margin: `0px`,
    overflow: `hidden`,
});

const Vector5: any = styled('img')({
    height: `20.42px`,
    width: `29.17px`,
    position: `absolute`,
    left: `3px`,
    top: `7px`,
});

const Frame29: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    flex: `1`,
    margin: `0px 0px 0px 10px`,
});

const Typography2: any = styled('div')(({ theme }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: theme.palette['text']['secondary'],
    fontStyle: theme.typography['Typography']['body1'].fontStyle,
    fontFamily: theme.typography['Typography']['body1'].fontFamily,
    fontWeight: theme.typography['Typography']['body1'].fontWeight,
    fontSize: theme.typography['Typography']['body1'].fontSize,
    letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
    lineHeight: theme.typography['Typography']['body1'].lineHeight,
    textDecoration: theme.typography['Typography']['body1'].textDecoration,
    textTransform: theme.typography['Typography']['body1'].textTransform,
    margin: `0px`,
}));

const Typography3: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px`,
});

const Typography4: any = styled('div')(({ theme }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: theme.palette['text']['secondary'],
    fontStyle: theme.typography['Typography']['h3'].fontStyle,
    fontFamily: theme.typography['Typography']['h3'].fontFamily,
    fontWeight: theme.typography['Typography']['h3'].fontWeight,
    fontSize: theme.typography['Typography']['h3'].fontSize,
    letterSpacing: theme.typography['Typography']['h3'].letterSpacing,
    lineHeight: theme.typography['Typography']['h3'].lineHeight,
    textDecoration: theme.typography['Typography']['h3'].textDecoration,
    textTransform: theme.typography['Typography']['h3'].textTransform,
    margin: `0px`,
}));

const Typography5: any = styled('div')(({ theme }: any) => ({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: theme.palette['text']['secondary'],
    fontStyle: theme.typography['Typography']['body2'].fontStyle,
    fontFamily: theme.typography['Typography']['body2'].fontFamily,
    fontWeight: theme.typography['Typography']['body2'].fontWeight,
    fontSize: theme.typography['Typography']['body2'].fontSize,
    letterSpacing: theme.typography['Typography']['body2'].letterSpacing,
    lineHeight: theme.typography['Typography']['body2'].lineHeight,
    textDecoration: theme.typography['Typography']['body2'].textDecoration,
    textTransform: theme.typography['Typography']['body2'].textTransform,
    margin: `0px`,
}));

const Frame32: any = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px 0px 0px 10px`,
});

const IconLeft: any = styled(FileDownloadOutlinedIcon)(({ theme }: any) => ({
    height: `20px`,
    width: `20px`,
}));

const IconLeft1: any = styled(FileUploadOutlinedIcon)(({ theme }: any) => ({
    height: `20px`,
    width: `20px`,
}));

const IconLeft2: any = styled(RefreshOutlinedIcon)(({ theme }: any) => ({
    height: `20px`,
    width: `20px`,
}));

const IconLeft3: any = styled(PrintIcon)(({ theme }: any) => ({
    height: `20px`,
    width: `20px`,
}));

const IconLeft4: any = styled(QuestionMarkOutlinedIcon)(({ theme }: any) => ({
    height: `20px`,
    width: `20px`,
}));

const MenuButton = styled(Button)<MenuButtonProps>(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: theme.palette['text']['secondary'],
    transition: 'background-color 0s',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: theme.palette['grey']['400'],
    },
}));

const Link1 = styled(Button)<Link1Props>(({ theme }) => ({
    color: theme.palette['primary']['main'],
    backgroundColor: 'transparent',
    textTransform: 'unset',
    fontWeight: 'normal',
    '&:hover': {
        color: theme.palette['primary']['dark'],
        backgroundColor: 'transparent',
        textDecoration: 'underline',
    },
}));

//This component handles the file upload dialog
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function PageHeader(props: PageHeaderProps) {

    const [open, setOpen] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Open the dialog
        setOpen(true);
    };

    const handleClose = () => {
        // Close the dialog
        setOpen(false);
    };

    return (
        <Frame30>
            <Icon6>
                <CompareArrowsFilled>
                    <Vector5 src={Vector5Image} loading="lazy" alt={'Vector'} />
                </CompareArrowsFilled>
            </Icon6>
            <Frame29>
                <Typography3>
                    <Typography4>{`TRADE SOLUTIONS`}</Typography4>
                </Typography3>
                <Typography5>{`View and upload trade templates`}</Typography5>
            </Frame29>
            <Frame32>
                <MenuButton
                    size={'medium'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                    startIcon={<IconLeft />}
                >
                    {'Template Download'}
                </MenuButton>
                <MenuButton
                    component="label"
                    size={'medium'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                    startIcon={<IconLeft1 />}
                    tabIndex={-1}
                >
                    {'Template Upload'}
                    <VisuallyHiddenInput type="file" onChange={handleFileChange} /> {/* Handle file upload */}
                </MenuButton>
                {/* Confirmation dialog toggles after user selects file to upload */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                        <DialogTitle id="alert-dialog-title">
                            <Typography4>Review File Upload</Typography4>
                            <Typography2>Please ensure you've selected the correct file:</Typography2>
                        </DialogTitle>
                        <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', py: 0 }}>
                            <MenuItem sx={{ p: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    {'Attachment_1.jpg'}
                                    <Link1
                                        component="label"
                                        style={{ marginLeft: 'auto' }}
                                    >
                                        Select a different file
                                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                                    </Link1>
                                </Box>
                            </MenuItem>
                            <Divider style={{ margin: '0' }} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
                                Upload
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                        </DialogActions>
                    </Box>
                </Dialog>
                {/* End confirmation dialog */}
                <MenuButton
                    size={'medium'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                    startIcon={<IconLeft2 />}
                >
                    {'Refresh'}
                </MenuButton>
                <MenuButton
                    size={'medium'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                    startIcon={<IconLeft3 />}
                >
                    {'Print'}
                </MenuButton>
                <MenuButton
                    size={'medium'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                    startIcon={<IconLeft4 />}
                >
                    {'Help'}
                </MenuButton>
            </Frame32>
        </Frame30>
    );
}