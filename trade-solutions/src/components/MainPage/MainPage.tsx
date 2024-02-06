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

const MainPage1: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `982px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `24px 0px 0px 0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Frame25: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['200'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `3`,
  margin: `0px`,
}));

const Frame35: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: '0px auto',
  maxWidth: '1440px',
  width: '100%',
});

const Typography1: any = styled(Typography)(({ theme }: any) => ({
  margin: `0px`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
}));

const Frame36: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `2`,
  margin: `0px`,
});

const Frame28: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: '0px auto',
  maxWidth: '1440px',
  width: '100%',
});

const Frame27: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `24px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Logo: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `43px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `22px`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const Typography2: any = styled(Typography)(({ theme }: any) => ({
  margin: `0px 0px 0px 30px`,
  color: theme.palette['primary']['main'],
  fontStyle: theme.typography['Typography']['h4'].fontStyle,
  fontFamily: theme.typography['Typography']['h4'].fontFamily,
  fontWeight: theme.typography['Typography']['h4'].fontWeight,
  fontSize: theme.typography['Typography']['h4'].fontSize,
  letterSpacing: theme.typography['Typography']['h4'].letterSpacing,
  lineHeight: theme.typography['Typography']['h4'].lineHeight,
  textDecoration: theme.typography['Typography']['h4'].textDecoration,
  textTransform: theme.typography['Typography']['h4'].textTransform,
}));

const Frame33: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['300'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `8px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `1`,
  margin: `0px`,
}));

const Frame31: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: '0px auto',
  maxWidth: '1440px',
  width: '100%',
});

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
  color: theme.palette['text']['primary'],
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
  color: theme.palette['text']['primary'],
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


const Frame34: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['200'],
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 30px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  zIndex: `0`,
  margin: `0px`,
}));

const Frame16: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  boxShadow: theme.customShadows['elevation']['4'].boxShadow,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: '0px auto',
  maxWidth: '1440px',
  width: '100%',
}));

const DataGridHeader: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['primary']['main'],
  borderRadius: `4px 4px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `12px 16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Typography6: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Typography7: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['primary']['contrast'],
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

const DataGridContainer: any = styled('div')({
  borderRadius: `0px 0px 4px 4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
});

const DataGridTrade1: any = styled(DataGridTrade)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
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

function MainPage(props: MainPageProps): JSX.Element {
  return (
    <MainPage1 className={props.className}>
      <Frame25>
        <Frame35>
          <Typography1 variant={'body1'} gutterBottom={false}>
            {'Last Login: 12/06/2023 - 14:00 (Central Time)'}
          </Typography1>
        </Frame35>
      </Frame25>
      <Frame36>
        <Frame28>
          <Frame27>
            <Logo>
              <SVGLogo />
            </Logo>
            <Typography2 variant={'body1'} gutterBottom={false}>
              {'DIRECT'}
            </Typography2>
          </Frame27>

            <TopMenuItem></TopMenuItem>

        </Frame28>
      </Frame36>
      <Frame33>
        <Frame31>
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
        </Frame31>
      </Frame33>
      <Frame34>
        <Frame16>
          <DataGridHeader>
            <Typography6>
              <Typography7>{`TRADE SOLUTIONS`}</Typography7>
            </Typography6>
          </DataGridHeader>
          <DataGridContainer>
            <DataGridTrade1 />
          </DataGridContainer>
        </Frame16>
      </Frame34>
    </MainPage1>
  );
}

export default MainPage;
