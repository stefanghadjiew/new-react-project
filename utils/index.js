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
