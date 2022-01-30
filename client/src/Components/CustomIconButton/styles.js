import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.themeColors.dark.text,
    background: theme.themeColors.dark.button,
    '&:hover': {
        background: theme.themeColors.dark.button,
    },
}))

export default StyledIconButton
