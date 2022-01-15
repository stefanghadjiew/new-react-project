import React from 'react'
import { Snackbar, Alert, AlertTitle } from '@mui/material'
import { useGlobalContext } from '../../GlobalContext/GlobalContext.js'
import actionTypes from '../../GlobalContext/actionTypes.js'

const MessageToast = () => {
    const { appState, dispatch } = useGlobalContext()
    const { messageToast } = appState
    const { message, severity, isOpen } = messageToast

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch({ type: actionTypes.CLOSE_MESSAGE_TOAST })
    }

    const renderTitle = (severity) => {
        let title
        switch (severity) {
            case 'success':
                title = 'Success'
                break
            case 'error':
                title = 'Error'
                break
            case 'info':
                title = 'Info'
                break
            case 'warning':
                title = 'Warning'
                break
            default:
                title = 'No title'
        }
        return title
    }

    return (
        <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
            <Alert
                variant="filled"
                onClose={handleClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                <AlertTitle>{renderTitle(severity)}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default MessageToast
