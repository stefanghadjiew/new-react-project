import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Wrapper, IconInfoWrapper } from './styles'

const Likes = ({ likes, user }) => {
    return (
        <Wrapper>
            <IconInfoWrapper>
                <FavoriteBorderIcon style={{ marginRight: '5px' }} />
                {likes}
            </IconInfoWrapper>
            <IconInfoWrapper>
                <PersonOutlineIcon style={{ marginRight: '5px' }} />
                {user}
            </IconInfoWrapper>
        </Wrapper>
    )
}

export default Likes
