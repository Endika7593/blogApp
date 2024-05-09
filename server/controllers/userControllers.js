const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

const HttpError = require("../models/errorModel")


//REGISTER NEW USER
// POST : api/users/register
//UNPROTECTED
const registerUser = async (req, res, next) => {
    try {
        const {name, email, password, password2} = req.body;
        if(!name || !email || !password) {
            return next(new HttpError("Fill in all fields", 422))
        }

        const newEmail = email.toLowerCase()

        const emailExists = await User.findOne({email: newEmail})
        if(emailExists) {
            return next(new HttpError("Email already exists", 422))
        }

        if((password.trim()).length < 6) {
            return next(new HttpError("Password must be at least 6 characters long", 422))
        }

        if(password !== password2) {
            return next(new HttpError("Passwords do not match", 422))
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({name, email: newEmail, password: hashedPass})
        res.status(201).json(`New user ${newUser.email} registered.`)


    } catch (error) {
        return next(new HttpError("User registration failed", 422))
    }
}







//LOGIN A REGISTERED USER
// POST : api/users/login
//UNPROTECTED
const loginUser = async (req, res, next) => {
    res.json("Login user")
}







// USER PROFILE
// POST : api/users/:id
//PROTECTED
const getUser = async (req, res, next) => {
    res.json("User profile")
}








// CHANGE USER AVATAR (PROFILE PICTURE)
// POST : api/users/change-avatar
//PROTECTED
const changeAvatar = async (req, res, next) => {
    res.json("Change avatar")
}








// EDIT USER DETAILS (profile details)
// POST : api/users/edit-user
//PROTECTED
const editUser = async (req, res, next) => {
    res.json("Edit user details")
}








// CHANGE USER AVATAR GET AUTHORS 
// POST : api/users/authors
//UNPROTECTED
const getAuthors = async (req, res, next) => {
    res.json("Get all users/authors")
}






module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}