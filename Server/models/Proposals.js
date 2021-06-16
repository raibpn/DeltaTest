const mongoose = require('mongoose');
const Joi = require('joi');
enum status {
    Done = 1,
    Pending = 2,
    NotDone = 3
};
//user Schema all the users/companies that will be registering in the platform

const Proposal = mongoose.model('User', new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
         },
    description: {
        type: String,
        required: true,
        },
    negotiable: {
        type: Boolean,
        required: true,
    },
    Status: {
        type: status,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    Date: {
        type: Date,
        default: Date.now,
    }
));

function validateProposals(proposal) {
    const schema = {
      firstName: Joi.string().min(5).max(50).required(),
      lastName: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(proposal, schema);
}

exports.Proposal = Proposal;
exports.validate = validateProposals;