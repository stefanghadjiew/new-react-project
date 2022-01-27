import { styled } from '@mui/material/styles'
import Subtitle from '../CustomTypography/Subtitle.jsx'

export const StyledImage = styled('img')(({ theme }) => ({
    height: '100%',
    width: '100%',
    transition: 'all .5s ease ',
    filter: 'brightness(80%)',
    cursor:'pointer',
    '&:hover': {
        transform: 'scale(1.1)',
        filter: 'brightness(35%)',
        transition: 'all .2s ease',
    },
}))

export const DescriptionWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textShadow: 'white 0px 0px 10px',
    '&:hover': {
        '& div': {
            opacity: '.8',
            maxHeight: 'fit-contet',
        },
        '& h6': {
            opacity: '.8',
            maxHeight: '2rem',
        },
    },
}))

export const Description = styled('div')(() => ({
    transition: 'all .2s',
    position: 'absolute',
    left: '1.5rem',
    right: '1.5rem',
    bottom: '1.5rem',
    pointerEvents: 'none',
}))

export const StyledSubtitle = styled(Subtitle)(() => ({
    textAlign: 'left',
    opacity: '0',
    maxHeight: '0',
    transition: 'all .2s',
}))

export const Wrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    opacity: '0',
    position: 'absolute',
    top: '1rem',
    left: '1.5rem',
    maxHeight: '0',
    zIndex: '1',
    transition: 'all .2s',
    pointerEvents: 'none',
}))

export const IconInfoWrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
}))
