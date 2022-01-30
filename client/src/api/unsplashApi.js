import axios from 'axios'
import { accessKey, baseUrl } from './apiConstants'


    export const unsplashGetPhotos = async (page,pageNumber) => {
        const options = createGetOptions(page,pageNumber)
        try {
            const response = await axios.request(options)
            return response.data
        } catch (err) {
            throw err
        }
    }
    
    export const unsplashLikePhoto = async (page,photoId) => {
        const options = createPostOptions(page,photoId,'like')
        try {
            const response = await axios.request(options)
            return response.data
        } catch (err) {
            throw err
        }
    }

    export const unsplashSearchPhotos = async (page,query) => {
        const options = createGetOptions(page,null,query,null)
        try {
            const response = await axios.request(options)
            console.log(response)
        } catch(err) {
            throw err
        }

    }

    export const getPhotoStatistics = async (page,photoId) => {
        const options = createGetOptions(page,null,null,photoId)
        try {
            const response = await axios.request(options)
            return response.data
        } catch(err) {
            throw err
        }
    }
    
    const createGetOptions = (page,pageNumber,query,itemId) => {
        const options = {
            method: 'GET',
            url: createGetURI(page,pageNumber,query,itemId),
            headers: {
                Authorization: `Client-ID ${accessKey}`,
            },
        }
        
        return options
    }
    
    const createPostOptions = (page,itemId,verb) => {
        const options = {
            method:'POST',
            url :`${baseUrl}/${page}/${itemId}/${verb}`,
            headers: {
                Authorization: `Client-ID ${accessKey}`,
            }
        }
    
        return options
    }

    const createGetURI = (page,pageNumber,query,itemId) => {
        return query 
        ? `${baseUrl}/${page}?query=${query}&page=${pageNumber ? pageNumber : 1}&per_page=12`
        : itemId 
        ? `${baseUrl}/${page}/${itemId}/statistics`
        : `${baseUrl}/${page}?page=${pageNumber ? pageNumber : 1}&per_page=12`
    }

    



