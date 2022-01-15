import React from 'react'
import AppRouter from './Router'
import { GlobalContextProvider } from './GlobalContext/GlobalContext'
import { MessageToast } from './Components'
import CustomTheme from './CustomTheme/CustomTheme.jsx'

const App = () => {
    return (
        <>
            <CustomTheme>
                <GlobalContextProvider>
                    <MessageToast />
                    <AppRouter />
                </GlobalContextProvider>
            </CustomTheme>
        </>
    )
}

export default App
