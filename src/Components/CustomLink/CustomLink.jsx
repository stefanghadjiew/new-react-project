import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Subtitle } from '../../Components';

const StyledLink = styled(Link)(() =>({
    textDecoration: 'none',
    '&:hover' : {
        transform:'translateY(-2.5px)',
        transition: '.3s ease',
        '& h6' : {
            opacity: '1'
        }
    },
    transition: '.3s ease'
}));

const CustomLink = ({link,title}) => {
    return (
        <StyledLink to={link}>
            <Subtitle text={title}/>
        </StyledLink>
    )
}

export default CustomLink;