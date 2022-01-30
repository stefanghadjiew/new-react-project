import { styled } from '@mui/material/styles'

export const SearchWrapper = styled('div')(({ theme }) => ({
    height: '4rem',
    backgroundColor: theme.themeColors.dark.text,
    borderRadius: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '.5px solid rgba(255,255,255,.8)',
    padding: '.5rem',
    marginTop: '5rem',
    '& input': {
        '&::before': {
            border: '0 !important',
        },
        '&::after': {
            border: 0,
        },
    },
}))

export const SearchComponent = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}))
