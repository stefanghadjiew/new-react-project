import React from 'react'
import { supportedLanguages } from '../../utils/supportedLanguages';
import i18next from 'i18next';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollectionsIcon from '@mui/icons-material/Collections';
import TopicIcon from '@mui/icons-material/Topic';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import CustomLink from '../CustomLink/CustomLink';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.css';
import { ListItem } from '@mui/material';


const useStyles = makeStyles({
    icon : {
        color:'white',
        opacity: '0.8',
        /* fontSize:'medium', */
    },
    menuItem : {
        width:'100vw',
        '&:hover' : {
            transition: 'all .2s ease',
            '& .MuiSvgIcon-root' : {
                color: 'white',
                transition: '.2s ease'
            }
        },
        
    },
    link : {
        textDecoration:'none',
        '& li' : {
            color:'white',
            opacity:'0.8',
            '&:hover' : {
                backgroundColor:'white',
                color: '#2c2d3d',
                '& .MuiSvgIcon-root' : {
                    color: '#2c2d3d'
                }
            }
        }
    }
})


const StaticResources = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    const menuItems = 
    [
        {title: t('Navbar.items.0'), id: 0, menuIcon: <HomeIcon className={classes.icon}/>, link:'/'},
        {title: t('Navbar.items.1'), id: 1, menuIcon: <AddAPhotoIcon className={classes.icon}/>, link:'/photos'},
        {title: t('Navbar.items.2'), id: 2, menuIcon: <AccountCircleIcon className={classes.icon}/>,link: '/users'}, 
        {title: t('Navbar.items.3'), id: 3, menuIcon: <CollectionsIcon className={classes.icon}/>, link: '/collections'}, 
        {title: t('Navbar.items.4'), id: 4, menuIcon: <TopicIcon className={classes.icon}/>,link: '/topics'},
        {title: t('Navbar.items.5'), id: 5, menuIcon: <LoginIcon className={classes.icon}/>, link: '/login'}
    ]

    const renderMenuItems = menuItems.map(item => 
    <CustomLink title={item.title} key={item.id} link={item.link}/>
    );

    const renderDropdownMenuItems = menuItems.map(item =>
    <Link to={item.link} className={classes.link} key={item.id}> 
        <ListItem className={classes.menuItem}>
            <ListItemIcon>
                {item.menuIcon}
            </ListItemIcon>
                {item.title}
        </ListItem>
    </Link>
    );

    const renderLanguages = supportedLanguages.map(({code,name,country_code}) =>
    <ListItem key={country_code}>
        <Button variant="text" style={{color:'white',padding:0}} onClick={() => {i18next.changeLanguage(code)}}>
            <span style={{marginRight:'5px'}} className={`fi fi-${country_code} mx-2`}></span>
        {name}
        </Button>
    </ListItem>
    );

    return {
       menuItems,
        renderMenuItems,
        renderDropdownMenuItems,
        renderLanguages
    }
}





export default StaticResources
