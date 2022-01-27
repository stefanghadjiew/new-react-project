import React from 'react'
import { Typography } from '@mui/material'

const H5 = ({ ...props }) => {
    const { style, text } = props

    return (
        <Typography variant="h5" style={style} {...props}>
            {text}
        </Typography>
    )
}

export default H5
