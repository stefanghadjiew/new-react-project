import React from 'react'
import { Typography } from '@mui/material'

const Subtitle = ({ ...props }) => {
    const { style, text, key } = props

    return (
        <Typography variant="subtitle1" style={style} {...props} key={key}>
            {text}
        </Typography>
    )
}

export default Subtitle
