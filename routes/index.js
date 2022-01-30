import express from 'express'
import { getAllPhotos,likeAphoto,getPhotoStatistics,searchPhotos } from '../unsplashapi/index.js'
const router = express.Router()

router.get('/allPhotos',getAllPhotos)
router.get('/photos/:id/statistics',getPhotoStatistics)
router.get('/search/photos',searchPhotos)
router.post('photos/:id/like',likeAphoto) // add auth middleware 

export default router
