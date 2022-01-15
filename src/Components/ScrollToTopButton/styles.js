import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.themeColors.dark.text,
    background: theme.themeColors.dark.button,
    '&:hover': {
        background: theme.themeColors.dark.button,
    },
    position: 'fixed',
    bottom: '40px',
    right: '40px',
}))
