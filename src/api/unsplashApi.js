import axios from 'axios'
import { accessKey, baseUrl } from './apiConstants'

export const getPhotos = async (page) => {
    const options = createOptions('GET', page)
    try {
        const response = await axios.request(options)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

const createOptions = (method, page) => {
    const options = {
        method,
        url: `${baseUrl}?page=${page}&per_page=12`,
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
    }
    return options
}
