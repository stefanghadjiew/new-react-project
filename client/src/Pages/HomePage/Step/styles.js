import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    textAlign: 'left',
    marginTop: '60px',
    padding: '0px 10px',
    [theme.breakpoints.down(900)]: {
        maxWidth: '550px',
    },
}))
