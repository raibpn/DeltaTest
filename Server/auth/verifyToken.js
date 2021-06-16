const jwt = require('jsonwebtoken');

//protecting random access to routes without valid token
module.exports = function(req, res, next) {
    const token = req.header('auth-token'); //checking auth token
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.PrivateKey);
        req.user = verified;
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}