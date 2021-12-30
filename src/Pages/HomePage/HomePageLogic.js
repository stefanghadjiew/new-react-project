import React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { makeStyles } from '@mui/styles';
import ServiceItem from './ServiceItem/ServiceItem.jsx';
import {
    H3,
    H5,
    H6,
    Subtitle,
    CustomButton
} from '../../Components';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Step from './Step/Step.jsx';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ImageIcon from '@mui/icons-material/Image';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import CssIcon from '@mui/icons-material/Css';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const StyledBox = styled(Box)(({theme}) => ({
    marginTop: '6rem',
    padding:'0px 10px 10px',
    width:'25%',
    [theme.breakpoints.down(900)] : {
        width: '100%'
    }
}))

const useStyles = makeStyles({
    icon : {
        color:'white',
        fontSize:'32px !important',
        opacity:'0.8',
        marginLeft:'10px'
    },
    smallHeading : {
        fontWeight:'bold', 
        fontSize:'18px',
        
    },
    stepIcon : {
        color: "#687ded",
        fontSize: '48px !important',
        opacity: '0.8',
        marginRight: '10px' 
    },
    productBenefitsIcon: {
        color: "#687ded",
        fontSize: '32px !important',
        opacity: '0.8',
        marginRight: '20px'
    }

})

const HomePageLogic = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    

    const servicesPreview = [
        {
            title: <Subtitle text={t('HomePage.services.0')} lineHeight="normal"/>,
            id: 0, 
            icon: <BoltIcon className={classes.icon}/>
        },
        {
            title: 
            <Subtitle text={t('HomePage.services.1')} lineHeight="normal"/>, 
            id: 1, 
            icon: <InsertPhotoIcon className={classes.icon}/>
        },
        {
            title: <Subtitle text={t('HomePage.services.2')} lineHeight="normal"/>, 
            id: 2, 
            icon: <PeopleIcon className={classes.icon}/>
        },
        {
            title: <Subtitle text={t('HomePage.services.3')} lineHeight="normal"/>, 
            id: 3, 
            icon: <CollectionsBookmarkIcon className={classes.icon}/>
        }
    ];

    const renderServicesPrevie = servicesPreview.map(service =>
        <ServiceItem key={service.id} title={service.title} icon={service.icon}/>
    );

    const steps = [
        {
            title: <H6 fontWeight='bold' text={t('HomePage.steps.0')}/>,
            description: <Subtitle fontSize='14px' lineHeight='28px' text={t('HomePage.steps.1')}/>,
            icon: <AutoAwesomeMotionIcon className={classes.stepIcon}/>,
            id: 0
        },
        {
            title: <H6 fontWeight='bold' text={t('HomePage.steps.2')}/>,
            description: <Subtitle fontSize='14px' lineHeight='28px' text={t('HomePage.steps.3')}/>,
            icon: <LibraryAddIcon className={classes.stepIcon}/>,
            id: 1

        },
        {
            title: <H6 fontWeight='bold' text={t('HomePage.steps.4')}/>,
            description: <Subtitle fontSize='14px' lineHeight="28px" text={t('HomePage.steps.5')}/>,
            icon : <FlashOnIcon className={classes.stepIcon}/>,
            id: 2
        }
    ];

    const renderSteps = steps.map(step =>
        <Step key={step.id} title={step.title} icon={step.icon} description={step.description}/>
    );

    const productBenefits = [
        {
            title: <H6 fontWeight='bold' text={t('HomePage.productBenefits.0')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.1')}/>,
            icon: <FlashOnIcon className={classes.productBenefitsIcon}/>,
            id: 0 
        },
        {
            title: <H6 fontWeight='bold' text={t('HomePage.productBenefits.2')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.3')}/>,
            icon: <CompareArrowsIcon className={classes.productBenefitsIcon}/>,
            id: 1 
        },
        {
            title: <H6 fontWeight='bold' text={t('HomePage.productBenefits.4')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.5')}/>,
            icon: <ImageIcon className={classes.productBenefitsIcon}/>,
            id: 2
        },
        {
            title: <H6 fontWeight='bold' text={t('HomePage.productBenefits.6')}/> ,
            description: <Subtitle text={t('HomePage.productBenefits.7')}/>,
            icon: <DashboardCustomizeIcon className={classes.productBenefitsIcon}/>,
            id: 3
        },
        {
            title: <H6 fontWeight="bold" text={t('HomePage.productBenefits.8')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.9')}/>,
            icon: <MobileScreenShareIcon className={classes.productBenefitsIcon}/>,
            id: 4
        },
        {
            title: <H6 fontWeight="bold" text={t('HomePage.productBenefits.10')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.11')}/>,
            icon: <CssIcon className={classes.productBenefitsIcon}/>,
            id: 5
        },
        {
            title: <H6 fontWeight="bold" text={t('HomePage.productBenefits.12')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.13')}/>,
            icon: <HistoryToggleOffIcon className={classes.productBenefitsIcon}/>,
            id: 6
        },
        {
            title: <H6 fontWeight="bold" text={t('HomePage.productBenefits.14')}/>,
            description: <Subtitle text={t('HomePage.productBenefits.15')}/>,
            icon: <LockIcon className={classes.productBenefitsIcon}/>,
            id: 7
        }
    ];
    
    const renderProductBenefits = productBenefits.map(benefit =>
        <Grid item xs={12} md={6} style={{backgroundColor:'#2c2d3d',lineHeight:'30px'}} key={benefit.id}>
            <Item style={{backgroundColor:'#2c2d3d', boxShadow:'none', maxWidth:'600px'}}>
                <Step title={benefit.title} icon={benefit.icon} description={benefit.description}/>
            </Item>
        </Grid>
    );

    const pricings = [
        {
            title: <H5 text={t('HomePage.pricings.package.0.title')} fontSize="20px"/>,
            pricing: <H3 text={t('HomePage.pricings.package.0.price')} fontSize="32px"/>,
            pricingSubtitle: <Subtitle text={t('HomePage.pricings.package.0.subtitle')}/>,
            button: <CustomButton buttonText="Try it free" style={{width:'100%',whiteSpace:'nowrap'}}/>,
            benefits : [
                <Subtitle text={t('HomePage.pricings.benefits.free.0')} fontWeight="bold"/>,
                <Subtitle text={t('HomePage.pricings.benefits.free.1')}/>,
            ],
            id: 0
        },
        {
            title: <H5 text={t('HomePage.pricings.package.1.title')} fontSize="20px"/>,
            pricing: <H3 text={t('HomePage.pricings.package.1.price')} fontSize="32px"/>,
            pricingSubtitle: <Subtitle text={t('HomePage.pricings.package.1.subtitle')}/>,
            button: <CustomButton buttonText="Try it free" style={{width:'100%',whiteSpace:'nowrap'}}/>,
            benefits : [
                <Subtitle text={t('HomePage.pricings.benefits.starter.0')} fontWeight="bold"/>,
                <Subtitle text={t('HomePage.pricings.benefits.starter.1')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.starter.2')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.starter.3')}/>,
            ],
            id: 1
        },
        {
            title: <H5 text={t('HomePage.pricings.package.2.title')} fontSize="20px"/>,
            pricing: <H3 text={t('HomePage.pricings.package.2.price')} fontSize="32px"/>,
            pricingSubtitle: <Subtitle text={t('HomePage.pricings.package.2.subtitle')}/>,
            button: <CustomButton buttonText={t('HomePage.buttons.1')} style={{width:'100%',whiteSpace:'nowrap'}}/>,
            benefits : [
                <Subtitle text={t('HomePage.pricings.benefits.pro.0')} fontWeight="bold"/>,
                <Subtitle text={t('HomePage.pricings.benefits.pro.1')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.pro.2')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.pro.3')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.pro.4')}/>
            ],
            id: 2
        },
        {
            title: <H5 text={t('HomePage.pricings.package.3.title')} fontSize="20px"/>,
            pricing: <H3 text={t('HomePage.pricings.package.3.price')} fontSize="32px"/>,
            pricingSubtitle: <Subtitle text={t('HomePage.pricings.package.3.subtitle')}/>,
            button: <CustomButton buttonText="Try it free" style={{width:'100%',whiteSpace:'nowrap'}}/>,
            benefits : [
                <Subtitle text={t('HomePage.pricings.benefits.enterprise.0')} fontWeight="bold"/>,
                <Subtitle text={t('HomePage.pricings.benefits.enterprise.1')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.enterprise.2')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.enterprise.3')}/>,
                <Subtitle text={t('HomePage.pricings.benefits.enterprise.4')}/>
            ],
            id: 3
        }
    ];

    const renderPricings = pricings.map(pricing => 
        <StyledBox key={pricing.id}>
            <Box style={{textAlign:'center', marginBottom: '40px'}}>
                {pricing.title}
            </Box>
            <Box style={{textAlign:'center',marginBottom:'40px'}}>
                {pricing.pricing}
                {pricing.pricingSubtitle}
            </Box>
            {pricing.button}
            <Box style={{marginTop:'40px',textAlign:'center'}}>
                {pricing.benefits.map((benefit,index) => <Box style={{paddingTop:'10px'}} key={index}>{benefit}</Box>)}
            </Box>
        </StyledBox>
    );

    const documentationItems = [
        {
            title: <H5 style={{margin:'20px 0px 10px',fontWeight:'bold'}} text={t('HomePage.documentationItems.0.title')}/>,
            description: <Subtitle style={{fontSize:'14px'}} text={t('HomePage.documentationItems.0.subtitle')}/>,
            id: 0
        },
        {
            title: <H5 style={{margin:'20px 0px 10px',fontWeight:'bold'}} text={t('HomePage.documentationItems.1.title')}/>,
            description: <Subtitle style={{fontSize:'14px'}} text={t('HomePage.documentationItems.1.subtitle')}/>,
            id: 1
        },
        {   
            title: <H5 style={{margin:'20px 0px 10px',fontWeight:'bold'}} text={t('HomePage.documentationItems.2.title')}/>,
            description: <Subtitle style={{fontSize:'14px'}} text={t('HomePage.documentationItems.2.subtitle')}/>,
            id: 2
        },
        {
            title: <H5 style={{margin:'20px 0px 10px',fontWeight:'bold'}} text={t('HomePage.documentationItems.3.title')}/>,
            description: <Trans i18nKey="HomePage.documentationItems.3.subtitle"/>,
            id: 3
        }
    ]

    const renderDocumentationItems = documentationItems.map(item => 
        <Box style={{paddingBottom:'20px'}} key={item.id}>
            {item.title}
            {item.description}
        </Box>   
    ) 

    return {
        renderServicesPrevie,
        renderSteps,
        renderProductBenefits,
        renderPricings,
        renderDocumentationItems
    }
}

export default HomePageLogic;