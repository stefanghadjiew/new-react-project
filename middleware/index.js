import db from "../db/index.js"
import jwt from 'jsonwebtoken'
import { 
    checkDataForRequiredProperties,
    getAuthenticatedUser,
    getUserByEmail,
    checkValidResetPasswordRequest,
    checkIfDBisEmpty
} from '../utils/index.js'

export const createUser = (req,res,next) => {
    const userInfo = req.body
    checkDataForRequiredProperties(userInfo) 
        ? db.createNewUser(userInfo) 
            ? res.status(200).json({
                email:userInfo.email,
                token : jwt.sign(userInfo,process.env.JWT_SECRET_KEY)}) 
            : next({status : 409,message:'User already exists'})
        : res.status(400).json({
            message: 'Invalid email and/or password is less than 8 characters',
            timestamp: Date.now(),
            description:'Testing'
        })
}

export const loginUser = (req,res,next) => {
    const userInfo = req.body
    if(checkIfDBisEmpty(db)) {
        res.status(400).json({message: 'User with given credentials doesent exist'})
        return
    }
    checkDataForRequiredProperties(userInfo)
        ? getAuthenticatedUser(userInfo,db) 
            ? res.status(200).json({
                email: userInfo.email,
                token : jwt.sign(userInfo,process.env.JWT_SECRET_KEY) // user needs to send this token back to obtain the one from unsplash
                })
            : next({status:400,message:"Wrong name/password"})
        : res.status(400).json({message: 'User doesent exist.Please create an account first'})
}

export const isUserAuthorized = (req,res,next) => { // check if user sends the token from the proxy 
    const jwtPayload = req.headers.authorization.split(" ")[1] 
    jwt.verify(jwtPayload,process.env.JWT_SECRET_KEY, (err,decoded) => {
        if(decoded)  {
            req.isUserAuthorized = true
            return next()
        }
        if(err) return next({status:401,message: "You have to login to perform this action"})
    })
}

export const resetPassword = (req,res,next) => {
    const userInfo = req.body
    if(checkIfDBisEmpty(db)) {
        return res.status(400).json({message: 'No user with given password found'})
    }
    if(checkValidResetPasswordRequest(userInfo) === false) {
        return res.status(400).json({message: 'Password should be more than 7 characters long'})
    }
    const foundUser = getUserByEmail(userInfo,db)
    if(foundUser) {
        if(foundUser.password === userInfo.newPassword) {
            return res.status(400).json({message: 'New password should be different the old one'})
        }
        foundUser.password = userInfo.newPassword
        return res.status(200).json({message: 'Password changed successfully'})
        
    }
    res.status(400).json({message: 'No user with given password found'})
}
