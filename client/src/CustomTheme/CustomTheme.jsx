import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useGlobalContext } from '../GlobalContext/GlobalContext'

const CustomTheme = ({ children }) => {
    const { appState } = useGlobalContext()
    const { appTheme } = appState

    const textColor = appTheme.dark ? 'rgba(255,255,255,.8)' : '#2c2d3d'
    const backgroundColor = appTheme.dark ? '#2c2d3d' : 'rgba(255,255,255,.8)'
    const buttonColor = '#687ded !important'
        
    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&:disabled': {
                            backgroundColor: buttonColor,
                            color: textColor,
                            opacity: '.3',
                        },
                    },
                },
            },
        },
       /*  custom : { // Uncomment this when ready with setup and delete themeColors object
            backgroundColor : backgroundColor,
            text: textColor,
            button: buttonColor
        }, */
        themeColors: { // fix this now since darkTheme is coming from golbal State
            dark: {
                background: backgroundColor,
                text: textColor,
                button: buttonColor,
            },
            light: {
                background: textColor,
                text: '#2c2d3d',
                button: '#687ded !important',
            },
        },
        typography: {
            h3: {
                color: textColor,
                fontWeight: '600',
                marginBottom: '30px',
                opacity:.8
            },
            h5: {
                color: textColor,
                opacity: .8
            },
            h6: {
                color: textColor,
                fontSize: '1.125rem',
                opacity: .8
            },
            subtitle1 : {
                color: textColor,
                opacity: .8
            } 
        }
    })
    
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomTheme
