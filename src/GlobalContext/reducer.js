import actionTypes from './actionTypes'
import initialState from './appState'

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                photos: {
                    ...state.photos,
                    displayedImages: action.payload,
                },
            }
        case actionTypes.FETCH_ERROR:
            return {
                ...state,
                error: 'Something went wrong',
            }
        case actionTypes.SET_PAGE:
            return {
                ...state,
                photos: { ...state.photos, page: action.payload },
            }
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case actionTypes.OPEN_MESSAGE_TOAST:
            return {
                ...state,
                messageToast: {
                    isOpen: action.payload.isOpen,
                    message: action.payload.message,
                    severity: action.payload.severity,
                },
            }
        case actionTypes.CLOSE_MESSAGE_TOAST: {
            return {
                ...state,
                messageToast: initialState.messageToast,
            }
        }
        case actionTypes.SET_CURRENT_IMAGE: {
            return {
                ...state,
                photos: {...state.photos, currentlyDisplayedImage: setCurrentlyDisplayedImage(state,action.payload)}
            }
        }
        case actionTypes.SEARCH_PHOTOS: {
            return {
                ...state,
                photos: {
                    ...state.photos,
                    displayedImages: action.payload
                }
            }
        }
        case actionTypes.SET_PHOTO_STATISTICS: {
            return {
                ...state,
                photos: {
                    ...state.photos,
                    currentlyDisplayedImageStatistics : action.payload
                }
            }
        }
        case actionTypes.SET_DARK_THEME : {
            return {
                ...state,
                darkTheme : !state.darkTheme,
               /*  theme : {
                    dark : !state.theme.dark,
                    light : !state.theme.light
                } */
            }
        }
        default:
            return state
    }
}

const setCurrentlyDisplayedImage = (state,id) => {
    const currentlyDisplayedImage = state.photos.displayedImages.filter(photo => photo.id === id)
    return currentlyDisplayedImage
}

export default reducer
