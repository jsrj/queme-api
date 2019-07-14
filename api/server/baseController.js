const express = require('express')
const router  = express.Router()

// Global Middlewares
// ...

// Base Auth Route
const authController = require('./auth/authController')
router.use('/auth', authController)

module.exports = router