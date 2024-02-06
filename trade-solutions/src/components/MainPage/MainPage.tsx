/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Typography, Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import PrintIcon from '@mui/icons-material/Print';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import VectorImage from 'src/assets/images/mainPage_Vector.png';
import Vector1Image from 'src/assets/images/mainPage_Vector_1.png';
import Vector2Image from 'src/assets/images/mainPage_Vector_2.png';
import Vector3Image from 'src/assets/images/mainPage_Vector_3.png';
import Vector4Image from 'src/assets/images/mainPage_Vector_4.png';
import Vector5Image from 'src/assets/images/mainPage_Vector_5.png';
import { styled } from '@mui/material/styles';
import DataGridTrade from 'src/components/DataGridTrade/DataGridTrade';
import { MainPageProps } from 'src/types';

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
  backgroundColor: `rgba(238, 238, 238, 1)`,
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
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
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
  color: `rgba(0, 0, 0, 0.6)`,
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
  color: `rgba(0, 60, 110, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
}));

const Frame20: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `8px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Tab: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Tab1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Container: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `9px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const Icon1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 6px`,
});

const ArrowDropDownFilled: any = styled('div')({
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
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector: any = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `7px`,
  top: `10px`,
});

const Tab2: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Tab3: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Container1: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `9px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const Icon2: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 6px`,
});

const ArrowDropDownFilled1: any = styled('div')({
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
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector1: any = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `7px`,
  top: `10px`,
});

const Tab4: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Tab5: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Container2: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `9px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button3: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const Icon3: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 6px`,
});

const ArrowDropDownFilled2: any = styled('div')({
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
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector2: any = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `7px`,
  top: `10px`,
});

const Tab6: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Tab7: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Container3: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `9px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button4: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const Icon4: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 6px`,
});

const ArrowDropDownFilled3: any = styled('div')({
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
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector3: any = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `7px`,
  top: `10px`,
});

const Tab8: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Tab9: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Container4: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `9px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Button5: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
  margin: `0px`,
}));

const Icon5: any = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 6px`,
});

const ArrowDropDownFilled4: any = styled('div')({
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
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector4: any = styled('img')({
  height: `5px`,
  width: `10px`,
  position: `absolute`,
  left: `7px`,
  top: `10px`,
});

const Frame33: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(238, 238, 238, 1)`,
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)`,
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
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `116.70000553131104%`,
  textTransform: `none`,
  margin: `0px`,
}));

const Typography5: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.17000000178813934px`,
  textDecoration: `none`,
  lineHeight: `142.99999475479126%`,
  textTransform: `none`,
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
  margin: `0px`,
  gap: '4px',
});

const Frame34: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(238, 238, 238, 1)`,
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
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)`,
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
  backgroundColor: `rgba(0, 60, 110, 1)`,
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

const Typography16: any = styled('div')({
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

const Typography17: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
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
            <Logo>{`LOGO`}</Logo>
            <Typography2 variant={'body1'} gutterBottom={false}>
              {'DIRECT'}
            </Typography2>
          </Frame27>
          <Frame20>
            <Tab>
              <Tab1>
                <Container>
                  <Button1>{`DASHBOARD`}</Button1>
                  <Icon1>
                    <ArrowDropDownFilled>
                      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                    </ArrowDropDownFilled>
                  </Icon1>
                </Container>
              </Tab1>
            </Tab>
            <Tab2>
              <Tab3>
                <Container1>
                  <Button2>{`ACCOUNTS`}</Button2>
                  <Icon2>
                    <ArrowDropDownFilled1>
                      <Vector1
                        src={Vector1Image}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </ArrowDropDownFilled1>
                  </Icon2>
                </Container1>
              </Tab3>
            </Tab2>
            <Tab4>
              <Tab5>
                <Container2>
                  <Button3>{`PAYMENTS`}</Button3>
                  <Icon3>
                    <ArrowDropDownFilled2>
                      <Vector2
                        src={Vector2Image}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </ArrowDropDownFilled2>
                  </Icon3>
                </Container2>
              </Tab5>
            </Tab4>
            <Tab6>
              <Tab7>
                <Container3>
                  <Button4>{`REPORTS`}</Button4>
                  <Icon4>
                    <ArrowDropDownFilled3>
                      <Vector3
                        src={Vector3Image}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </ArrowDropDownFilled3>
                  </Icon4>
                </Container3>
              </Tab7>
            </Tab6>
            <Tab8>
              <Tab9>
                <Container4>
                  <Button5>{`ADMINISTRATION`}</Button5>
                  <Icon5>
                    <ArrowDropDownFilled4>
                      <Vector4
                        src={Vector4Image}
                        loading="lazy"
                        alt={'Vector'}
                      />
                    </ArrowDropDownFilled4>
                  </Icon5>
                </Container4>
              </Tab9>
            </Tab8>
          </Frame20>
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
          </Frame30>
          <Frame32>
            <Button
              variant="contained"
              startIcon={<FileDownloadOutlinedIcon />}
              size="small"
              color="inherit">Template Download
            </Button>
            <Button
              variant="contained"
              startIcon={<FileUploadOutlinedIcon />}
              size="small"
              color="inherit">Template Upload
            </Button>
            <Button
              variant="contained"
              startIcon={<RefreshOutlinedIcon />}
              size="small"
              color="inherit">Refresh
            </Button>
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              size="small"
              color="inherit">Print
            </Button>
            <Button
              variant="contained"
              startIcon={<QuestionMarkOutlinedIcon />}
              size="small"
              color="inherit">Help
            </Button>
          </Frame32>
        </Frame31>
      </Frame33>
      <Frame34>
        <Frame16>
          <DataGridHeader>
            <Typography16>
              <Typography17>{`TRADE SOLUTIONS`}</Typography17>
            </Typography16>
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
