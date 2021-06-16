const mongoose = require('mongoose');
const Joi = require('joi');

//user Schema all the users/companies that will be registering in the platform

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    active: {
        type: Boolean
    },
    Phone_number: {
        type: String
    },
    profile_pic: {
        type: String
    },
    user_role_id: {
        type: Number
    },
    zip_code: {
        String
    },
    city: {
        type: String
    }

}));

function validateUser(user) {
    const schema = {
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

module.exports = User;
exports.validate = validateUser;