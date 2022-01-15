import React from 'react'

import MediaQueries from '../../responsive/MediaQueries'
import { StyledH3 } from './styles'

const H3 = ({ ...props }) => {
    const { isMobile } = MediaQueries()
    const { style, text } = props
    return (
        <StyledH3 variant={isMobile ? 'h4' : 'h3'} style={style} {...props}>
            {text}
        </StyledH3>
    )
}

export default H3
