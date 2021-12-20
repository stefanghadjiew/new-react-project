import React, { useState } from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import { Typography } from '@mui/material';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { StyledEngineProvider } from '@mui/material/styles';


const useStyles = makeStyles(() => ({
    textField : {
        color: "white",
        "&::after" : {
            borderBottom: '2px solid white'
        } 
    },
    navbar : {
        display: "flex",
        alignItems:"center",
        padding:"0 100px",
        width: "100vw",
        height: "70px",
        backgroundColor:"#2c2d3d",
        justifyContent:"space-between"
    },
    logo : {
        display: "flex"
    },
    navbarItems : {
        display:"flex",
        width: "400px",
        justifyContent:"space-evenly",
        color:"white"
    }
}));


const Navbar = () => {

    const classes = useStyles();
    const [ search, setSearch ] = useState('');

    const navbarItems = 
        [
            {name: "Movies", id: 1},
            {name: "TV Shows", id: 2}, 
            {name: "Actors", id: 3}, 
            {name: "Directors", id: 4}
        ]
        .map(item => 
            <Typography variant="h7" key={item.id}>
                {item.name}
            </Typography>
        );

    const handleSearch = e => {
        setSearch(e.currentTarget.value);
    }

    return (
        <StyledEngineProvider injectFirst>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <MovieIcon style={{color:"white"}} fontSize="large"/>
                    <Typography variant="h6" style={{color:"white"}}>Movie App</Typography>
                </div>
                <div className={classes.navbarItems}>
                    {navbarItems}
                </div>
                <Input 
                    className={classes.textField}
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                    startAdornment ={
                        <InputAdornment position="start">
                                    <SearchIcon style={{color:"white"}}/>
                            </InputAdornment>
                    }
                />
            </div>
        </StyledEngineProvider>
    )
}

export default Navbar;