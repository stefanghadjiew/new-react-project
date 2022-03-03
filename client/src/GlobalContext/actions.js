import actionTypes from './actionTypes'
import { pages } from '../api/apiConstants'
import { 
    unsplashGetPhotos, 
    unsplashLikePhoto,
    unsplashSearchPhotos,
    getPhotoStatistics,
    createUser,
    loginUser,
    resetPassword
} from '../api/unsplashApi'

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

export const setLightTheme = (dispatch) => {
    dispatch({type: actionTypes.SET_LIGHT_THEME})
}

export const setUser = async (dispatch,userInfo,isLogin) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })
    try {
        const response = isLogin 
            ? await loginUser(userInfo) 
            : await createUser(userInfo)
        dispatch({type: actionTypes.SET_USER, payload: response})
    } catch(err) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: err.message,severity:'error'}
        })
        return { hasError : true } 
    }
    dispatch({ type: actionTypes.SET_LOADING, payload: false })
}


export const changePassword = async (dispatch,userInfo) => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })
    if(userInfo.newPassword !== userInfo.repeatNewPassword) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: 'New password doesent match the repeated value',severity:'error'}
        })
        return { hasError: true}
    }
    if(!userInfo.email) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: 'You have to log in to perform this action',severity:'error'}
        })
        return { hasError: true}
    }
    try {
        const response = await resetPassword(userInfo)
        console.log(response)
    } catch(err) {
        dispatch({
            type: actionTypes.OPEN_MESSAGE_TOAST,
            payload: {isOpen:true,message: err.message,severity:'error'}
        })
        return { hasError : true } 
    }
}

export const logUserOut = (dispatch) => {
    dispatch({type: actionTypes.LOG_OUT_USER})
}
