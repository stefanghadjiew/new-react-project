import React, { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollectionsIcon from '@mui/icons-material/Collections';
import TopicIcon from '@mui/icons-material/Topic';
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import LoginIcon from '@mui/icons-material/Login';
import CustomLink from '../CustomLink/CustomLink';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import DropdownMenuLogic from './DropdownMenu/DropdownMenuLogic';
import { supportedLanguages } from '../../utils/supportedLanguages';
import i18next from 'i18next';
import Button from '@mui/material/Button';
import 'flag-icons/css/flag-icons.css';

const useStyles = makeStyles({
    icon : {
        color:'white',
        opacity: '0.8',
        fontSize:'small',
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

const NavbarLogic = () => {
    const { handleClose } = DropdownMenuLogic();
    const { t } = useTranslation();
    const classes = useStyles();

    //dropdownMenu state
    const [isDropdownMenuOpen,setisDropdownMenuOpen] = useState(false);
    //selectLanguage state
    const [isSelecLanguageOpen,setIsSelectLanguageOpen] = useState(false);
    
    const toggleMenu = () => {
        setisDropdownMenuOpen(!isDropdownMenuOpen)
    }
    
    const toggleSelectLanguage = () => {
        setIsSelectLanguageOpen(!isSelecLanguageOpen)
    }

    /* getPhotos().then(popularMovies => console.log(popularMovies)); */
    
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
            <MenuItem 
                className={classes.menuItem}
                onClick={handleClose}>
                <ListItemIcon>
                    {item.menuIcon}
                </ListItemIcon>
                    {item.title}
            </MenuItem>
        </Link>
    );

    const renderLanguages = supportedLanguages.map(({code,name,country_code}) =>
        <MenuItem key={country_code}>
            <Button variant="text" style={{color:'white'}} onClick={() => {i18next.changeLanguage(code)}}>
                <span style={{marginRight:'5px'}} className={`fi fi-${country_code} mx-2`}></span>
            {name}
            </Button>
        </MenuItem>
);

    return {
        toggleMenu,
        toggleSelectLanguage,
        menuItems,
        renderMenuItems,
        renderDropdownMenuItems,
        renderLanguages
    }
}

export default NavbarLogic;