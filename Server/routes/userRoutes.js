const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const { User, validate } = require('../models/User');

const {
  getUsers: getUsers,
  getUserById: getUserById,
} = require("../controller/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);


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
        user = new User(_.pick(req.body, ['fitstName','lastName', 'email', 'password']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(_.pick(user, ['_id', 'firstName','lastName', 'email','password']));
    }
});

module.exports = router;