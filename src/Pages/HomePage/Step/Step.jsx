import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Wrapper = styled('div')(({theme}) => ({
    display: 'flex',
    textAlign:'left',
    marginTop:'60px',
    padding:'0px 10px',
    [theme.breakpoints.down(900)] : {
        maxWidth: '550px'
    }
}))


const Step = ({icon, title, description}) => {

    return (
        <Wrapper>
            {icon}
            <Box>
                {title}
                <div style={{marginTop:'10px'}}>
                    {description}
                </div>
            </Box>
        </Wrapper>
    )
}

export default Step;