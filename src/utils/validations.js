export  const validateInput = (type, value) => {
    let error;
    switch (type) {
        case 'email':
            const validRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            error = value.match(validRegex)
                ? ''
                : 'This is not a valid email address'
            break
        case 'password':
            error =
                value.length > 5
                    ? ''
                    : 'Password must be atleast 6 characters'
            break
        case 'text' :
            return ''
        default:
            return ''
    }
   
    return error
}
