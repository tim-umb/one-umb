import React from 'react';
import { Typography, Button } from '@mui/material'
import TopMenuItem from '../Menu/menu';
import Vector5Image from 'src/assets/images/mainPage_Vector_5.png';
import { styled } from '@mui/material/styles';
import PrintIcon from '@mui/icons-material/Print';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMark';
import RefreshOutlinedIcon from '@mui/icons-material/Refresh';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DataGridTrade from 'src/components/DataGridTrade/DataGridTrade';
import { MainPageProps } from 'src/types';
import SVGLogo from '../Logo/Logo';
import { PageHeaderProps } from 'src/types';

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

const MenuButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: theme.palette['text']['secondary'],
    transition: 'background-color 0s',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: theme.palette['grey']['400'],
    },
}));

export default function PageHeader(props: PageHeaderProps) {

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
                    size={'medium'}
                    color={'inherit'}
                    disabled={false}
                    variant={'contained'}
                    startIcon={<IconLeft1 />}
                >
                    {'Template Upload'}
                </MenuButton>
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