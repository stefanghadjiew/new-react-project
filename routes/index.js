import express from 'express'
import { getAllPhotos,likeAphoto,getPhotoStatistics,searchPhotos } from '../unsplashapi/index.js'
import { createUser,loginUser, isUserAuthorized } from '../middleware/index.js'
const router = express.Router()

//a photo ID for testing endpoints - FV3GConVSss
//auth Token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3RlZmFuIiwicGFzc3dvcmQiOiIxMjNzbW9rZXdlZWQxMjMiLCJpYXQiOjE2NDQ1MzI1MTZ9.00GphjTOqAHjooSjgNDdcF3-EhgaekD60Nv5Kbnw0dg

router.get('/allPhotos',getAllPhotos)
router.get('/photos/:id/statistics',getPhotoStatistics)
router.get('/search/photos',searchPhotos)
router.post('/photos/:id/like',isUserAuthorized,likeAphoto) //authorized user only
router.post('/users/create',createUser)
router.post('/login',loginUser)

export default router
