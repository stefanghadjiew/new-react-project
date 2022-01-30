import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

const StyledTextField = styled(TextField)(() => ({
    width: '100%',
    marginBottom: '1.875rem',
    '& label': {
        color: 'white',
        opacity: '.5',
    },
    '& label.Mui-focused': {
        color: 'white',
        opacity: '.8',
    },
    '& .MuiInput-input': {
        borderBottom: '.5px solid white',
    },
    '.MuiInputBase-root': {
        color: 'white',
        opacity: '.8',
        '&::before': {
            border: 0,
        },
        '&::after': {
            border: 0,
        },
        '&.MuiInput-root:hover:before': {
            border: 0,
        },
    },
}))

export default StyledTextField
