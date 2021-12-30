import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { H6,H3,CustomButton } from "../../Components";
import FooterLogic from './FooterLogic';

const Wrapper = styled('div')(() =>({
    backgroundColor:"#1b1643",
    padding:"0px 20px",
}));

const InnerWrapper = styled('div')(() =>({
    maxWidth:'1110px',
    marginLeft:'auto',
    marginRight:'auto',
    display:'block'
}))

const FooterTop = styled('div')(() =>({
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(87,90,123,.19)',
    paddingTop:'55px',
    paddingBottom:'55px'
}))

const StyledTypography = styled(Typography)(() =>({
    fontSize:'2rem',
    fontWeight:'bold',
    '& span' : {
        color: '#687ded'
    }
}))

const FooterBottom = styled('div')(() =>({
    paddingTop:'105px',
    paddingBottom:'10px',
    display: 'flex'
}))


const Footer = () => {

    const { renderFooterPartData1,renderFooterPartData2 } = FooterLogic();

    return (
        <Wrapper>
            <InnerWrapper>
                <FooterTop>
                    <div style={{display:'block'}}>
                        <StyledTypography>
                            Let's send your <span>first API call</span>
                        </StyledTypography>
                        <H6 style={{opacity:'0.5'}} text="Get your API key in 10 seconds and start automating workflows."/>
                    </div>
                    <div>
                        <CustomButton style={{margin:0}} buttonText={"test if this works"}/>
                    </div>
                </FooterTop>
                <FooterBottom>
                    {renderFooterPartData1}
                </FooterBottom>
                <FooterBottom>
                    {renderFooterPartData2}
                </FooterBottom>
                <FooterBottom style={{paddingBottom:'105px',display:'flex',flexDirection:'column'}}>
                    <H3 style={{fontSize:'16px',letterSpacing:'2px',textTransform:"uppercase",opacity:1,marginBottom:'10px'}} text="Photoverse"/>
                    <H6 style={{lineHeight:'34px', cursor:'pointer'}} text="The API Company"/>
                    <H6 style={{lineHeight:'34px', cursor:'pointer'}} text="Made in Aksakovo,Bulgaria"/>
                </FooterBottom>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Footer;