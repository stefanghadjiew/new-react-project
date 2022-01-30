import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(38vw - 1rem)',
    marginLeft: '1rem',
    maxWidth: '50rem',
    minWidth: '20rem',
    padding: '2.5rem 1.5rem',
    borderRadius: '.5rem',
    marginTop: '4rem',
    boxShadow: 'rgba(255, 255, 255, 0.08) 0px 4px 8px 0px',
}))
