const express = require('express')
const router  = express.Router()

// Middlewares

// Routes
router.use('/login',    require('./routes/login'))
router.use('/register', require('./routes/register'))

module.exports = router