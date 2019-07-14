const express = require('express')
const router  = express.Router()

// Middlewares

// Song Routes
router.use('/', require('./routes/songs'))

// Collection Routes
// router.use('/collections', require('./routes/collections'))

module.exports = router