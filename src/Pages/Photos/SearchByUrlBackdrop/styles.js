import { styled } from '@mui/material/styles'

export const StyledContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    maxWidth: '788px',
    width: 'calc(100vw - 4rem)',
    borderRadius: '.5rem',
    height: '548px',
    padding: '1rem',
    margin: 'auto',
    backgroundColor: theme.themeColors.dark.background,
}))

export const SerachByUrlContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    border: `1px dashed rgba(255,255,255,.3)`,
    borderRadius: '.5rem',
    position: 'relative',
    '&:hover': {
        border: `1px dashed ${theme.themeColors.light.background}`,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Content = styled('div')(({ theme }) => ({
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
}))

export const Or = styled('div')(({ theme }) => ({
    display: 'flex',
    textAlign: 'center',
    color: theme.themeColors.dark.text,
    marginBottom: '1.5rem',
}))
