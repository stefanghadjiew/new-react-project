import { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer.js'
import initialState from './appState'
import { fetchPhotos } from './actions.js'

export const GlobalContext = createContext({})

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(reducer, initialState)
   
    useEffect(() => {
        fetchPhotos(dispatch,appState)
    }, [appState.photos.page])

    return (
        <GlobalContext.Provider value={{ appState, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
