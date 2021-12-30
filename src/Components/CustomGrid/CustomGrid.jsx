import React from 'react';
import Grid from '@mui/material/Grid';

const CustomGrid = ({children}) => {
    return (
        <Grid 
            container 
            style={{backgroundColor: '#2c2d3d'}} 
            rowSpacing={4}>
            {children}
        </Grid>
    )
}

export default CustomGrid;