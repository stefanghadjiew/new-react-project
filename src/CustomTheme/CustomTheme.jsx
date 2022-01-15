import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:disabled': {
                        backgroundColor: '#687DED',
                        color: 'rgba(255,255,255,0.8)',
                        opacity: '.3',
                    },
                },
            },
        },
    },
    themeColors: {
        dark: {
            background: '#2c2d3d',
            text: 'rgba(255,255,255,.8)',
            button: '#687ded !important',
        },
        light: {
            background: 'rgba(255,255,255,.8)',
            text: '#2c2d3d',
            button: '#687ded !important',
        },
    },
})

const lightTheme = createTheme({})

const CustomTheme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomTheme
