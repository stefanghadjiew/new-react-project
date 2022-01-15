const initialState = {
    loading: false,
    user: {},
    messageToast: {
        isOpen: false,
        message: '',
        severity: 'success',
    },
    photos: {
        displayedImages: [],
        page: 1,
    },
    subscription: '',
    onDemand: '',
    error: '',
}

export default initialState
