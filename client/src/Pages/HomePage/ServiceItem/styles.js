import { styled } from '@mui/material/styles'

export const StyledServiceItem = styled('div')(() => ({
    display: 'flex',
    fontSize: '18px',
    letterSpacing: '.5px',
    alignItems: 'center',
    '& h6': {
        marginLeft: '10px',
    },
    position: 'relative',
    '&:before': {
        content: "''",
        position: 'absolute',
        left: '0',
        height: '0',
        width: '1px',
        backgroundColor: 'white',
        opacity: '0.8',
    },
    '&:hover:before': {
        height: '100%',
        transition: '.3s ease',
    },
}))
