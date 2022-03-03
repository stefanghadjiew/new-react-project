import React from 'react'
import MediaQueries from '../../responsive/MediaQueries'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material'

const H3 = ({ ...props }) => {
    const theme = useTheme()
    const { isMobile } = MediaQueries()
    const { style, text } = props
    return (
        <Typography variant={isMobile ? 'h4' : 'h3'} sx={{color: theme.custom.text}} style={style} {...props}>
            {text}
        </Typography>
    )
}

export default H3
