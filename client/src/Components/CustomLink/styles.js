import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    '&:hover': {
        transform: 'translateY(-2.5px)',
        transition: '.3s ease',
        '& h6': {
            opacity: '1',
        },
    },
    transition: '.3s ease',
}))

export default StyledLink
