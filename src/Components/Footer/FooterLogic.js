import React from 'react';
import { H6,H3 } from '../../Components';
import { styled } from '@mui/material/styles';

const FooterPart = styled('div')(() =>({
    display:'flex',
    flexDirection:'column',
    width:'33.333%',
    textAlign:'left'   
}))

const FooterLogic = () => {

    
    const apisToLookUp = ['Weather API','Market Data API', 'IP Geolocation API','Exchange Rate API','Public Holidays API','Company Enrichment API','Time, Date, Timezone API', 'Language Translation API']
    
    const apisToCreate = ['User Avatar API','Web Scraping API', 'Link Shortener API', 'Image Processing API', 'Website Screenshot API']
    
    const apisToValidate = ['IBAN Validation API', 'Email Validation API', 'Phone Validation API', 'VAT Validation & Rates API']

    const resources = ['Free GDPR Cookie Banner', 'HTTP Status Code Guide', 'What is my IP adress?', 'Email Regex Guide', 'API Guides & Tips', 'API Glossary', 'Full API List'].map(resource => <H6 style={{lineHeight:'34px', cursor:'pointer'}} text={resource}/>); 
    const company = ['Contact Us', 'Facebook', 'Linkedin', 'Twitter', 'Legal', 'GDPR & CCPA'].map(item => <H6 style={{lineHeight:'34px', cursor:'pointer'}} text={item}/>); 

    const renderApisToLookUp = apisToLookUp.map(api => <H6 style={{lineHeight:'34px', cursor:'pointer'}} text={api}/>);
    const renderApisToCreate = apisToCreate.map(api => <H6 style={{lineHeight:'34px', cursor:'pointer'}} text={api}/>);
    const renderApisToValidate = apisToValidate.map(api => <H6 style={{lineHeight:'34px', cursor:'pointer'}} text={api}/>);

    const renderFooterPartData1 = 
    [
        {title: `API'S TO LOOK UP`, data: renderApisToLookUp},
        {title: `API'S TO CREATE`, data: renderApisToCreate},
        {title: `API'S TO VALIDATE`, data: renderApisToValidate}
    ].map(item => 
    <FooterPart>
        <H3 style={{fontSize:'16px',letterSpacing:'2px',textTransform:"uppercase",opacity:1,marginBottom:'10px'}} text={item.title}/>
        {item.data}   
    </FooterPart>)

    const renderFooterPartData2 = [
        {title: 'Resources', data: resources },
        {title: 'Company', data: company}
    ].map(item => 
        <FooterPart>
            <H3 style={{fontSize:'16px',letterSpacing:'2px',textTransform:"uppercase",opacity:1,marginBottom:'10px'}} text={item.title}/>
            {item.data}   
        </FooterPart>)

    return {
        renderFooterPartData1,
        renderFooterPartData2
    }
}

export default FooterLogic;