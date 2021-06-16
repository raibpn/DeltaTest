
//Not done
const User = require("../models/User");

//Get all the users
const getUsers = async (req, res) => {
  var users = {};
  await User.find({}, (err, user) => {
    users[user._id] = user;
    res.send(users);
  });
};

//get specific user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//add user
const addUser = (req, res, next) => {
  let User = new User({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    active: req.body.active,
    phone_number: req.body.phone_number,
    user_role_id: req.body.user_role_id,
    zip_code: req.body.zip_code,
    city: req.body.city
  })
  console.log(User);
  User.save().then(() => {
    res.json({
      message: 'User Addedd Success!'
    })
  })
    .catch(() => {
      res.json({
        message: 'An Error Occured!'
      })
    })
}

//update user
const update = (req, res, next) => {
  let userId = req.body.userId
  let updatedData = {
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    active: req.body.active,
    phone_number: req.body.phone_number,
    user_role_id: req.body.user_role_id,
    zip_code: req.body.zip_code,
    city: req.body.city
  }
  user.findByIdAndUpdate(userId, { $set: updatedData })
    .then(() => {
      res.json({
        message: 'User update success!'
      })
    })
    .catch(error => {
      res.json({
        message: 'An error occured!'
      })
    })
}

//delete user
const remove = (req, res, next) => {
  let userId = req.body.userId
  user.findByIdAndRemove(userId)
    .then(() => {
      req.json({
        message: 'User delete success!'
      })
    })
    .catch(error => {
      req.json({
        message: ' An error occured!'
      })
    })
}



module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  addUser, update, remove
};