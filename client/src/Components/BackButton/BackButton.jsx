import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'
import StyledIconButton from './styles'

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <Tooltip title="Back">
            <StyledIconButton onClick={() => navigate(-1)}>
                <ArrowBackIosIcon />
            </StyledIconButton>
        </Tooltip>
    )
}

export default BackButton
