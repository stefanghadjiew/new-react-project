import React from 'react'
import { StyledH6 } from './styles'

const H6 = ({ ...props }) => {
    const { style, text } = props

    return (
        <StyledH6 variant="h6" style={style} {...props}>
            {text}
        </StyledH6>
    )
}

export default H6
