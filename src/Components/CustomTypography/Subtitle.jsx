import React from 'react'
import { StyledSubtitle } from './styles'

const Subtitle = ({ ...props }) => {
    const { style, text, key } = props

    return (
        <StyledSubtitle variant="subtitle1" style={style} {...props} key={key}>
            {text}
        </StyledSubtitle>
    )
}

export default Subtitle
