const jwt = require('jsonwebtoken')
const secret = require('../config').jwtSecret

function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({msg: 'No token, unauthorized'})
  }

  try {
    const decode = jwt.verify(token, secret);
    req.user = decode;
    next();
  } catch(e) {
    res.status(400).json({msg: 'Invalid Token'});
  }
}

module.exports = auth;