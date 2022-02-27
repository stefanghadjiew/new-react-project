import React, { useState,Fragment } from 'react'
import { Drawer,Divider,List } from '@mui/material'
import { CustomButton } from '..'
import StyledIconButton from '../CustomIconButton/styles'
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import H6 from '../CustomTypography/H6'
import {StyledButtonContainer} from './styles'
import { useGlobalContext } from '../../GlobalContext/GlobalContext';
import { setDarkTheme,setLightTheme } from '../../GlobalContext/actions';


const useStyles = makeStyles({
    menu : {
        '& .MuiPaper-root' : {
            backgroundColor: '#2c2d3d',
            overflow:'hidden'
            
        }
        
    }
})

const CustomDrawer = ({menuItems,languages,icon}) => {
    const {dispatch,appState} = useGlobalContext()
    const {appTheme} = appState
    const classes = useStyles()
    const [open,setOpen] = useState(false)
    const toggle = () => {
        setOpen(prevOpen => !prevOpen)
    }

    
    return (
        <Fragment>
            <StyledIconButton onClick={toggle}>
                {icon}
            </StyledIconButton>
            <Drawer
                className={classes.menu}
                anchor='right'
                open={open}
                onClose={toggle}>
                   
                    <H6 text="Theme" style={{padding:'1rem'}}/>
                    <StyledButtonContainer >
                        <CustomButton
                            autoFocus={appTheme.dark ? false : true}
                            onClick={() => setLightTheme(dispatch)}
                            buttonText="Light"
                            style={{
                                width:'45%',
                                borderRadius:'1rem 0 0 1rem',
                                margin:0,
                                backgroundColor:'rgba(255,255,255,.8)',
                                }}/>
                        <CustomButton 
                            autoFocus={appTheme.dark ? true : false}
                            onClick={() => setDarkTheme(dispatch)}
                            buttonText="Dark"
                            style={{
                                width:'45%',
                                borderRadius:'0 1rem 1rem 0',
                                margin:0,
                                backgroundColor:'rgba(255,255,255,.8)',
                                }}/>
                    </StyledButtonContainer>
                    {menuItems && 
                        <Fragment>
                            <H6 text="Menu" style={{padding:'1rem'}}/>
                            <Box sx={{width:'300px',background:'#2c2d3d'}}>
                                <List>
                                    {menuItems}
                                </List>
                            </Box>
                            <Divider sx={{borderColor:'rgba(255,255,255,.3)'}}/>
                        </Fragment>
                    }
                    
                <H6 text="Languages" style={{padding:'1rem'}}/>
                <Box sx={{width:'300px',background:'#2c2d3d'}}>
                    <List>
                        {languages}
                    </List>
                </Box>
            </Drawer>
        </Fragment>
    )
}

export default CustomDrawer
