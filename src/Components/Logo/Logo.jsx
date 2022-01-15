import React from 'react'
import { Typography } from '@mui/material'

import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos'

import { StyledLogo } from './styles'

const Logo = ({ ...props }) => {
    const { style, iconstyle, textstyle } = props

    return (
        <StyledLogo {...props} style={style}>
            <MonochromePhotosIcon
                style={{ color: 'white', ...iconstyle }}
                fontSize="large"
            />
            <Typography
                variant="h6"
                style={{
                    color: 'white',
                    letterSpacing: '1px',
                    marginLeft: '5px',
                    ...textstyle,
                }}
            >
                photoverse
            </Typography>
        </StyledLogo>
    )
}

export default Logo
