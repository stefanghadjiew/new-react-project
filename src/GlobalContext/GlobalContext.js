import { createContext, useContext, useEffect, useReducer } from 'react'
import { getPhotos } from '../api/unsplashApi'
import reducer from './reducer.js'
import initialState from './appState'
import actionTypes from './actionTypes'

export const GlobalContext = createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: actionTypes.SET_LOADING, payload: true })
        getPhotos(appState.photos.page).then((data) => {
            const photos = data.map((img, i) => ({
                ...img,
                customTitle: `img${i}`,
            }))
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: photos })
        })
        dispatch({ type: actionTypes.SET_LOADING, payload: false })
    }, [appState.photos.page])

    return (
        <GlobalContext.Provider value={{ appState, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
