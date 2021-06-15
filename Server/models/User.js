const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

const user = mongoose.model('user', userSchema)

module.exports = User;