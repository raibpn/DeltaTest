const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, validate } = require('../models/User');
const UserController = require('../controller/userController');

//user routes
router.post('/', UserController.index)
router.post('/users', UserController.getUsers)
router.post('/create', UserController.addUser)
router.post('/update', UserController.update)
router.post('/delete', UserController.remove)

router.post('/', async (req, res) => {

  // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    
    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('User already exisits!');
    } else {
        // Insert the new user if they do not exist yet generate salt and hash the pw
        user = new User(_.pick(req.body, ['name', 'address', 'email', 'password', 'active', 'phone_number', 'profile_pic','user_role_id','zip_code','city']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(_.pick(user, ['_id', 'name', 'address', 'email', 'password', 'active', 'phone_number', 'profile_pic','user_role_id','zip_code','city']));
    }
});


module.exports = router;