import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

 const StyledButton = styled(Button)(({theme}) => ({
    marginTop:'30px',
    color:'white',
    textTransform:'none',
    padding:'10px 40px',
    borderRadius:'10px',
    fontSize:'18px',
    backgroundColor:'#687ded',
    opacity: '0.8',
    transition: 'all .3s ease',
    '&:hover': {
        textShadow: '0px 3px 3px black',
        backgroundColor:'#687ded',
        transition: 'all .3s ease',
        opacity: '0.9'
    },
    [theme.breakpoints.down(900)] : {
        fontSize:'14px'
    }
}));

const CustomButton = ({buttonText,...props}) => {
    

    const {style} = props;
    return (
        <StyledButton variant="contained" style={style}>
            {buttonText}
        </StyledButton>
    )
}

export default CustomButton;