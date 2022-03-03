import React from 'react'
import Dialog from '@mui/material/Dialog';
import { H3 } from '..';
import { CustomButton } from '..';
import {ActionsContainer,DialogBody} from './styles.js'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import { useTheme } from '@mui/material';
import { logUserOut } from '../../GlobalContext/actions';
import { useGlobalContext } from '../../GlobalContext/GlobalContext';

const ConfirmationDialog = ({openConfirmationDialog,title}) => {
    const {dispatch} = useGlobalContext()
    const theme = useTheme()
    const logout = () => {
        logUserOut(dispatch)
        closeConfirmationDialog()
    } //these type of functions should be passed by parent component to abstract logic away 
    const closeConfirmationDialog = () => {
        openConfirmationDialog.setValue(false)
    }
    return (
        <Dialog open={openConfirmationDialog.value}>
            <DialogBody>
                <H3 sx={{fontSize:'1.5rem',margin:0,padding:'1rem 1.5rem'}} text={title}/>
                    <NotListedLocationIcon sx={{fontSize: '5rem',margin:'auto',color: theme.custom.text}}/>
                <ActionsContainer>
                    <CustomButton sx={{width:'48%',margin:0}} buttonText="Yes" onClick={logout}/>
                    <CustomButton sx={{width:'48%',margin:0}} buttonText="No" onClick={closeConfirmationDialog}/>
                </ActionsContainer>
            </DialogBody>
        </Dialog>
    )
    
}

export default ConfirmationDialog
