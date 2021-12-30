import React from 'react';
import { styled } from '@mui/material/styles';
import HomePageLogic from './HomePageLogic';
import {
    PageWrapper,
    CustomButton, 
    H3,
    H5,
    H6,
    Subtitle,
    CustomGrid,
    SectionWrapper,
    Footer
        } from '../../Components';
import MediaQueries from '../../responsive/MediaQueries';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const StyledSubheadingWrapper = styled('div')(() =>({
    marginTop:'30px',
    letterSpacing:'1px'
}));

const StyledServicesWrapper = styled('div')(() => ({
    marginTop:'120px',
    display:'flex',
    justifyContent:'space-between',
}));

const StyledStepsWrapper = styled('div')(({theme}) => ({
    display:'flex',
    justifyContent:'space-around',
    [theme.breakpoints.down(900)] : {
        display: 'block'
    }
}))

const StyledPricingWrapper = styled('div')(({theme}) => ({
    display:'flex',
    [theme.breakpoints.down(900)] : {
        display: 'block'
    }
}))

const HomePage = () => {

    const { t } = useTranslation();
    const { 
        renderServicesPrevie, 
        renderSteps, 
        renderProductBenefits, 
        renderPricings,
        renderDocumentationItems 
    } = HomePageLogic();
    const { isMobile } = MediaQueries();

    

    return (
        <>
            <PageWrapper>
                <SectionWrapper>
                    <H3 text={t("HomePage.title")}/>
                    <StyledSubheadingWrapper>
                        <Subtitle text={t("HomePage.subtitle")}/>
                    </StyledSubheadingWrapper>
                    <CustomButton buttonText={t("HomePage.buttons.0")}/>
                    { !isMobile && 
                        <StyledServicesWrapper>
                            {renderServicesPrevie}
                        </StyledServicesWrapper>
                    }
                </SectionWrapper>
                <SectionWrapper style={{textAlign:'center',lineHeight:'30px'}}> 
                    <H5 text={t("HomePage.section.titles.0")}/>
                        <StyledStepsWrapper>
                        {renderSteps}
                    </StyledStepsWrapper>
                </SectionWrapper>
                <SectionWrapper style={{textAlign: 'center'}}>
                    <H5 text={t("HomePage.section.titles.1")}/>
                    <CustomGrid>
                        {renderProductBenefits}
                    </CustomGrid>
                </SectionWrapper>
                <SectionWrapper>
                    <H5 style={{textAlign:'center'}} text={t("HomePage.section.titles.2")}/>
                    <StyledPricingWrapper>
                        {renderPricings}
                    </StyledPricingWrapper>
                    <Subtitle style={{textAlign:'center',lineHeight:'30px',marginTop:'30px'}} text={t("HomePage.section.titles.3")}/>
                </SectionWrapper>
                <SectionWrapper>
                    <H3 style={{textAlign: 'center', fontSize:'32px'}} text={t("HomePage.section.titles.4")}/>
                    {renderDocumentationItems}
                </SectionWrapper>
                <SectionWrapper>
                    <H3 style={{textAlign: 'center', fontSize:'32px'}} text={t("HomePage.section.titles.5")}/>
                    <H3 style={{fontSize:'24px',textAlign: 'center'}} text={t("HomePage.section.titles.6")}/>
                    <Box style={{display:'flex', flexDirection: 'column'}}>
                        <Trans i18nKey="HomePage.section.titles.7"/>
                        <Trans i18nKey="HomePage.section.titles.8"/>
                    </Box>
                    <H3 
                        style={{fontSize:'14px',letterSpacing:'2px',textTransform:'uppercase',textAlign:'center',marginTop:'10rem',color:'#687ded'}}
                        text={t("HomePage.section.titles.9")}
                        />
                    <H5 style={{textAlign:'center',margin: '20px 0px 10px'}} text={t("HomePage.section.titles.10")}/>
                    <H6 style={{textAlign:'center',margin:'20px 0px 10px'}} text={t("HomePage.section.titles.11")}/>
                    <Box display="flex" justifyContent="center">
                        <CustomButton buttonText="GET YOUR FREE API KEY"/>
                    </Box>
                </SectionWrapper>
            </PageWrapper>
            <Footer/>
        </>
   )
}

export default HomePage;