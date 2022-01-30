import React from 'react'
import { Typography } from '@mui/material'

const H6 = ({ ...props }) => {
    const { style, text } = props

    return (
        <Typography variant="h6" style={style} {...props}>
            {text}
        </Typography>
    )
}

export default H6
