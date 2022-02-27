import * as React from 'react';
import BeatLoader from 'react-spinners/BeatLoader'
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';


const Loader = () => {
    const theme = useTheme()
    
    return (
        <Box 
            sx={{ 
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'transparent',
                }}>
            <BeatLoader color={theme.themeColors.dark.button} size={25}/>
        </Box> 
        
    )
}   

export default Loader
