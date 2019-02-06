const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const device = require('./model/device/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to device-nodejs API!' })
})

router.use('/api/v1/user', user)
router.use('/api/v1/device', device)

module.exports = router
