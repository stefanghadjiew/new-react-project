import React from 'react'
import Box from '@mui/material/Box'
import { Wrapper } from './styles'

const Step = ({ icon, title, description }) => {
    return (
        <Wrapper>
            {icon}
            <Box>
                {title}
                <div style={{ marginTop: '10px' }}>{description}</div>
            </Box>
        </Wrapper>
    )
}

export default Step
