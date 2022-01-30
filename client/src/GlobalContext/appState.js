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
    darkTheme: true,
    /* theme : { ---> is that better ??
        dark : false,
        light : true,
    }, */
    subscription: '',
    onDemand: '',
    error: '',
}

export default initialState
