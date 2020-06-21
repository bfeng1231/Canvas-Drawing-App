const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const secret = require('../../config').jwtSecret

router.get('/', (req, res) => {
  jwt.sign(
    {},
    secret,
    (err, token) => {
      if (err) throw err;
      res.json({token})
    }
  )
});

module.exports = router;