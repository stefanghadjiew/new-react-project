import actionTypes from './actionTypes'
import { pages } from '../api/apiConstants'
import { unsplashGetPhotos, unsplashLikePhoto,unsplashSearchPhotos,getPhotoStatistics } from '../api/unsplashApi'

export const fetchPhotos = async (dispatch,appState) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })
    try {
        const response = await unsplashGetPhotos(pages.PHOTOS,appState.photos.page)
        const photos = response.map((img,i) => ({
            ...img,
            customTitle:`img${i}`
        }))
        dispatch({ type: actionTypes.FETCH_SUCCESS, payload: photos })
    } catch(err) {
        console.log(err)
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: err.message,severity:'error'}
        }) 
    }
    dispatch({ type: actionTypes.SET_LOADING, payload: false })
}

export const likeAphoto = async (dispatch,page,photoId) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })
    try {
        const response = await unsplashLikePhoto(page,photoId)
        return response
    } catch(err) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: err.message,severity:'error'}
        }) 
    }
}

export const searchForPhotos = async (dispatch,query) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })
    try {
        const response = await unsplashSearchPhotos(pages.SEARCH_PHOTOS,query)
        console.log(response)
    } catch(err) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: err.message,severity:'error'}
        }) 
    }
}

export const fetchPhotosStatistics = async (dispatch,photoId) => {
    dispatch({type: actionTypes.SET_LOADING,payload: true})
    try {
        const response = await getPhotoStatistics(pages.PHOTOS,photoId)
        dispatch({type: actionTypes.SET_PHOTO_STATISTICS,payload: response})
    } catch(err) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: err.message,severity:'error'}
        })  
    }
    dispatch({ type: actionTypes.SET_LOADING, payload: false })
}

export const setDarkTheme = (dispatch) => {
    dispatch({type: actionTypes.SET_DARK_THEME})
}
