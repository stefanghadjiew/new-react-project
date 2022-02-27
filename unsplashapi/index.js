import axios from 'axios'
import {createGetOptions,createPostOptions, createAuthorizedPostOptions} from '../utils/index.js'

const BASE_URL = 'https://api.unsplash.com/'

let cachedPhotos
let cachedPhotoStatistics
let cachedSearchPhotos

export const getAllPhotos = async (req,res,next) => {
    const pageNumber = req.query.page
    if(cachedPhotos && cachedPhotos[cachedPhotos.length - 1].currentPage === pageNumber) {
        return res.json(cachedPhotos)
    }
    const url = `${BASE_URL}photos?page=${pageNumber}&per_page=12`
    const options = createGetOptions(url)
    try {
        const { data } = await axios.request(options)
        cachedPhotos = [...data,{currentPage: pageNumber}]
        return res.json(data)
    } catch(err) {
        return next(err)
    }
}

//requires user to be authorized

export const likeAphoto = async (req,res,next) => {
    const isUserAuthorized = req.isUserAuthorized
    const id = req.params.id 
    const url = `${BASE_URL}photos/${id}/like`
    const options = isUserAuthorized 
        ? createAuthorizedPostOptions(url) 
        : createPostOptions(url)
    try {
        const { data } = await axios.request(options)
        console.log(data)
        return res.json(data)
    } catch(err) {
        return next(err)
    }
}

export const getPhotoStatistics = async (req,res,next) => {
    const id = req.params.id
    const url = `${BASE_URL}photos/${id}/statistics`
    const options = createGetOptions(url)
    if(cachedPhotoStatistics && cachedPhotoStatistics.id === id) {
        return res.json(cachedPhotoStatistics)
    } 
    try {
        const { data } = await axios.request(options)
        cachedPhotoStatistics = data
        return res.json(data)
    } catch (err) {
        return next(err)
    }
}

export const searchPhotos = async (req,res,next) => {
    const query = req.query.query
    const url = `${BASE_URL}search/photos?query=${query}&per_page=12`
    const options = createGetOptions(url)
    if(cachedSearchPhotos && cachedSearchPhotos.requestedForQuery === query) {
        return res.json(cachedSearchPhotos)
    }
    try {
        const { data } = await axios.request(options)
        cachedSearchPhotos = {...data, requestedForQuery : query}
        return res.json(data)
    } catch(err) {
        return next(err)
    }

}


