const initialState = {
    loading: false,
    user: null,
    messageToast: {
        isOpen: false,
        message: '',
        severity: '',
    },
    photos: {
        displayedImages: [],
        page: 1,
        currentlyDisplayedImage : [],
        currentlyDisplayedImageStatistics : []
    },
    appTheme : { 
        dark : false,
        light : true,
    },
    subscription: '',
    onDemand: '',
    error: '',
}

export default initialState
