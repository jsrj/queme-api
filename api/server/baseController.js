const express = require('express')
const router  = express.Router()

// Global Middlewares
// ...

// Base Auth Route
const authController = require('./auth/authController')
router.use('/auth', authController)

const songController = require('./songs/songController')
router.use('/songs', songController)

module.exports = router