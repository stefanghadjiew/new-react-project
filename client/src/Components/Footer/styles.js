import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const Wrapper = styled('div')(() => ({
    backgroundColor: '#1b1643',
    padding: '0px 20px',
}))

export const InnerWrapper = styled('div')(() => ({
    maxWidth: '1110px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
}))

export const FooterTop = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(87,90,123,.19)',
    paddingTop: '55px',
    paddingBottom: '55px',
}))

export const StyledTypography = styled(Typography)(() => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    '& span': {
        color: '#687ded',
    },
}))

export const FooterBottom = styled('div')(() => ({
    paddingTop: '105px',
    paddingBottom: '10px',
    display: 'flex',
}))
