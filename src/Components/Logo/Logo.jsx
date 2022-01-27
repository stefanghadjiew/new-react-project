import React from 'react'
import { Typography } from '@mui/material'
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos'
import { StyledLogo } from './styles'
import { useTheme } from '@mui/material'

const Logo = ({ ...props }) => {
    const { style, iconstyle, textstyle } = props
    const theme = useTheme()
    return (
        <StyledLogo {...props} style={style}>
            <MonochromePhotosIcon
                style={{ color: theme.themeColors.dark.text, ...iconstyle }}
                fontSize="large"
            />
            <Typography
                variant="h6"
                style={{
                    color: theme.themeColors.dark.text,
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
