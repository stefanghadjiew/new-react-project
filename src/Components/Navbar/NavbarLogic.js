import React, { useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CollectionsIcon from '@mui/icons-material/Collections';
import TopicIcon from '@mui/icons-material/Topic';
import NavbarItem from './NavbarItem/NavbarItem';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    icon : {
        color:'#2c2d3d',
        fontSize:'small',
    }
})


const NavbarLogic = () => {
    const classes = useStyles();
    const [isMenuToggleOpen,setIsMenuToggleOpen] = useState(false);
    
    const toggle = () => {
        setIsMenuToggleOpen(!isMenuToggleOpen)
    }
    
    /* getPhotos().then(popularMovies => console.log(popularMovies)); */
    
    const navbarItems = 
        [
            {name: "Photos", id: 1, menuIcon: <AddAPhotoIcon className={classes.icon}/>, link:'/photos'},
            {name: "Users", id: 2, menuIcon: <AccountCircleIcon className={classes.icon}/>,link: '/users'}, 
            {name: "Collections", id: 3, menuIcon: <CollectionsIcon className={classes.icon}/>, link: '/collections'}, 
            {name: "Topics", id: 4, menuIcon: <TopicIcon className={classes.icon}/>,link: '/topics'}
        ]
    
    const renderNavbarItems = navbarItems.map(item => 
        <NavbarItem name={item.name} key={item.id} link={item.link}/>
    );

    return {
        toggle,
        navbarItems,
        renderNavbarItems
    }
}

export default NavbarLogic;