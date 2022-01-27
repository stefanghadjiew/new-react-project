import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'


const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: '30px',
    color: 'white',
    padding: '1.5rem',
    borderRadius: '20px',
    fontSize: '14px',
    textTransform: 'capitalize',
    backgroundColor: '#687ded',
    height: '40px',
    opacity: '0.8',
    transition: 'all .3s ease',
    '&:focus' : {
        backgroundColor: theme.themeColors.dark.button
    },
    '& .Mui-disabled': {
        backgroundColor: '#687ded',
        color: 'rgba(255,255,255,.8)',
        opacity: '.3',
    },
    '&:hover': {
        textShadow: '0px 3px 3px black',
        backgroundColor: '#687ded',
        transition: 'all .3s ease',
        opacity: '0.9',
    },
    [theme.breakpoints.down(1000)]: {
        fontSize: '14px',
    },
}))

export default StyledButton
