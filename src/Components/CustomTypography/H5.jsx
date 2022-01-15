import React from 'react'
import { StyledH5 } from './styles'

const H5 = ({ ...props }) => {
    const { style, text } = props

    return (
        <StyledH5 variant="h5" style={style} {...props}>
            {text}
        </StyledH5>
    )
}

export default H5
