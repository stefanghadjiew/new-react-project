import { styled } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    marginTop: '3.75rem',
    '& .MuiPagination-ul': {
        justifyContent: 'center',
        '& button': {
            color: theme.themeColors.dark.text,
            '&:hover': {
                background: theme.themeColors.dark.button,
                opacity: '.3',
            },
        },
        '& .MuiPaginationItem-root': {
            color: theme.themeColors.dark.text,
        },
    },
    '& .Mui-selected': {
        background: theme.themeColors.dark.button,
    },
}))
