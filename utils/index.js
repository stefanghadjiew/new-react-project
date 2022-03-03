export const createGetOptions = (url) => {
    const options = {
        method:'GET',
        url,
        headers : {
            Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
        }
    }

    return options
}

export const createPostOptions = url => {
    const options = {
        method:'POST',
        url,
        headers : {
            Authorization: `Client-ID: ${process.env.UNSPLASH_API_KEY}`
        }
    }
    
    return options
}

export const createAuthorizedPostOptions = url => {
    const options = {
        method:'POST',
        url,
        headers : {
            Authorization : `Bearer ${process.env.UNSPLASH_ACCESS_TOKEN}`
        }
    }

    return options
}

export const checkDataForRequiredProperties = data => {
    return Object.keys(data).length !== 0 
        && data.hasOwnProperty('email') 
        && data.hasOwnProperty('password')
        && checkForValidEmail(data['email'])
        && data['password'].length > 7   
}

const checkForValidEmail = email => {
    const validEmailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return email.match(validEmailRegEx) 
        ? true
        : false
}

export const getAuthenticatedUser = (userInfo,db) => {
    const foundUser = db.findUser(userInfo)
    return foundUser // can be either user or false
}

export const getUserByEmail = (userInfo,db) => {
    const foundUser = db.findUserByEmail(userInfo) // user or false
    return foundUser
}

export const checkValidResetPasswordRequest = userInfo => {
    return Object.keys(userInfo).length === 3
        && checkForValidEmail(userInfo.email)
        && userInfo.newPassword.length > 7
        && userInfo.repeatNewPassword.length > 7
        && userInfo.newPassword === userInfo.repeatNewPassword
}

export const checkIfDBisEmpty = db => {
    return db.usersDb.length === 0 
}
