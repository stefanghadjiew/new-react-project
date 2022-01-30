import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
    padding: '40px 30px 60px',
    backgroundColor: theme.themeColors.dark.background,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    [theme.breakpoints.down(500)]: {
        padding: '10px',
    },
}))
