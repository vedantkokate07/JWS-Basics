const express = require('express')
const router = express.Router()
const authenticatinMiddleware = require("../middleware/auth")
const {login,dashboard} = require("../controllers/main")

router.route('/dashboard').get(authenticatinMiddleware,dashboard)
router.route('/login').post(login)

module.exports = router