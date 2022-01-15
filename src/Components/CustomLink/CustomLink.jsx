import React from 'react'

import { Subtitle } from '../../Components'
import StyledLink from './styles'

const CustomLink = ({ link, title, style, ...props }) => {
    return (
        <StyledLink to={link} {...props}>
            <Subtitle text={title} style={style} />
        </StyledLink>
    )
}

export default CustomLink
