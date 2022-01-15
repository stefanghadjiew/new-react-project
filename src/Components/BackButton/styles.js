import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    left: '20px',
    top: '20px',
    fontSize: '2rem',
    color: theme.themeColors.dark.text,
    background: theme.themeColors.dark.button,
    '&:hover': {
        background: theme.themeColors.dark.button,
    },
}))

export default StyledIconButton
