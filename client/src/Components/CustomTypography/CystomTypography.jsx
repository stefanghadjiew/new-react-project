import React from 'react'
import { Typography } from '@mui/material'
import MediaQueries from '../../responsive/MediaQueries'

const CustomTypography = ({...props}) => {

    const {isMobile} = MediaQueries()
    const {h3props,h5props,h6props,subtitleprops} = props
    
    const H3 = () => {
        return (
            <Typography variant={isMobile ? 'h4' : 'h3'} {...h3props}>
                {h3props.text}
            </Typography>
        )
    }

    const H5 = () => {
        return (
            <Typography variant="h5" {...h5props}>
                {h5props.text}
            </Typography>
        )
    }

    const H6 = () => {
        return (
            <Typography variant="h6" {...h6props}>
                {h6props.text}
            </Typography>
        )
    }

    const Subtitle = () => {
        return (
            <Typography variant="subtitle1"  {...subtitleprops}>
                {subtitleprops.text}
            </Typography>
        )
    }

    return {H3,H5,H6,Subtitle}
}

export default CustomTypography
