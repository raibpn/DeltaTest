const jwt = require('jsonwebtoken')
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const authConfig = require('config');

router.post('/', async (req, res) => {
    //First Validate The HTTP Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    //find the user by their email address
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }

    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    } else {
        // Insert the new user if they do not exist yet
        user = new User(_.pick(req.body, ['firstName','lastName', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({ _id: user._id }, authConfig.get('PrivateKey'));
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
    }
    
});


//validate user/pw
function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;