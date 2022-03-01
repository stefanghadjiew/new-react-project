import db from "../db/index.js"
import jwt from 'jsonwebtoken'

export const createUser = (req,res,next) => {
    const userInfo = req.body
    checkDataForRequiredProperties(userInfo) 
        ? db.createNewUser(userInfo) 
            ? res.status(200).json({
                message: 'User created successfully',
                email:userInfo.email,
                token : jwt.sign(userInfo,process.env.JWT_SECRET_KEY)}) 
            : next({status : 409,message:'User already exists'})
        : res.status(400).json({
            message: 'Invalid email and/or password is less than 8 characters',
            timestamp: Date.now(),
            description:'Testing'
        })
}

const checkDataForRequiredProperties = data => {
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

export const loginUser = (req,res,next) => {
    const userInfo = req.body
    checkDataForRequiredProperties(userInfo)
        ? getAuthenticatedUser(userInfo) 
            ? res.status(200).json({
                message:'Authentication successful',
                email: userInfo.email,
                token : jwt.sign(userInfo,process.env.JWT_SECRET_KEY)
                })
            : next({status:400,message:"Wrong name/password"})
        : res.status(400).json({message: 'Username and/or password need to be atleast 4 symbols'})
}

const getAuthenticatedUser = userInfo => {
    const foundUser = db.findUser(userInfo)
    return foundUser // can be either user or false
}

export const isUserAuthorized = (req,res,next) => {
    const jwtPayload = req.headers.authorization.split(" ")[1] 
    jwt.verify(jwtPayload,process.env.JWT_SECRET_KEY, (err,decoded) => {
        if(decoded)  {
            req.isUserAuthorized = true
            return next()
        }
        if(err) return next({status:401,message: "You have to login to perform this action"})
    })
}
