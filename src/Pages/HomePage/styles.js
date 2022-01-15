import { styled } from '@mui/material/styles'

export const StyledSubheadingWrapper = styled('div')(() => ({
    marginTop: '30px',
    letterSpacing: '1px',
}))

export const StyledServicesWrapper = styled('div')(() => ({
    marginTop: '120px',
    display: 'flex',
    justifyContent: 'space-between',
}))

export const StyledStepsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down(900)]: {
        display: 'block',
    },
}))

export const StyledPricingWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down(900)]: {
        display: 'block',
    },
}))
