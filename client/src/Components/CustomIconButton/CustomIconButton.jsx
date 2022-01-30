import React from 'react'

import Tooltip from '@mui/material/Tooltip'
import StyledIconButton from './styles'

const CustomIconButton = (props) => {
    const { sx, icon, size, tooltipTitle = 'No title', onClick } = props
    return (
        <Tooltip title={tooltipTitle}>
            <StyledIconButton size={size} sx={sx} onClick={onClick}>
                {icon}
            </StyledIconButton>
        </Tooltip>
    )
}

export default CustomIconButton
