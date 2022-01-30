import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const StyledForm = styled(Box)(({ theme }) => ({
    padding: '2rem 2.5rem',
    minWidth: '28rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#343645',
    borderRadius: '.5rem',
    [theme.breakpoints.down(600)]: {
        minWidth: '100%',
        padding: '1rem',
    },
}))
