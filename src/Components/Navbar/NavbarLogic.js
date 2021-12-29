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

const useStyles = makeStyles({
    icon : {
        color:'white',
        opacity: '0.8',
        fontSize:'small',
    }
})

const NavbarLogic = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [isMenuToggleOpen,setIsMenuToggleOpen] = useState(false);
    
    const toggle = () => {
        setIsMenuToggleOpen(!isMenuToggleOpen)
    }
    
    /* getPhotos().then(popularMovies => console.log(popularMovies)); */
    
    const navbarItems = 
        [
            {title:t('Navbar.items.0'),id: 0,menuIcon:<HomeIcon className={classes.icon}/>, link:'/'},
            {title: t('Navbar.items.1'), id: 1, menuIcon: <AddAPhotoIcon className={classes.icon}/>, link:'/photos'},
            {title: t('Navbar.items.2'), id: 2, menuIcon: <AccountCircleIcon className={classes.icon}/>,link: '/users'}, 
            {title: t('Navbar.items.3'), id: 3, menuIcon: <CollectionsIcon className={classes.icon}/>, link: '/collections'}, 
            {title: t('Navbar.items.4'), id: 4, menuIcon: <TopicIcon className={classes.icon}/>,link: '/topics'},
            {title: t('Navbar.items.5'), id: 5, menuIcon: <LoginIcon className={classes.icon}/>, link: '/login'}
        ]
    
    const renderNavbarItems = navbarItems.map(item => 
        <CustomLink title={item.title} key={item.id} link={item.link}/>
    );

    return {
        toggle,
        navbarItems,
        renderNavbarItems
    }
}

export default NavbarLogic;