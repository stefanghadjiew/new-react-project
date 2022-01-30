import React from 'react'

import MediaQueries from '../../responsive/MediaQueries'
import { Typography } from '@mui/material'

const H3 = ({ ...props }) => {
    const { isMobile } = MediaQueries()
    const { style, text } = props
    return (
        <Typography variant={isMobile ? 'h4' : 'h3'} style={style} {...props}>
            {text}
        </Typography>
    )
}

export default H3
