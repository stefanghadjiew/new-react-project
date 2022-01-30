import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const CloseButton = ({ onClick,sx }) => {
    return (
        <IconButton sx={sx} onClick={onClick}>
            <CloseIcon />
        </IconButton>
    )
}

export default CloseButton
