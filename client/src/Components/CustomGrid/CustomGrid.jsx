import React from 'react';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';

const CustomGrid = ({children}) => {

    const theme = useTheme()

    return (
        <Grid 
            container 
            style={{backgroundColor: theme.themeColors.dark.background}} 
            rowSpacing={4}
        >
            {children}
        </Grid>
    )
}

export default CustomGrid;
