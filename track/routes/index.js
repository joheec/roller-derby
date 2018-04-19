const express = require('express')
const router = express.Router()
const { check } = require('express-validator/check')

const SSRD = require('../middleware/ssrd')

const responseMiddleware = (req, res, next) => {
  return res.json(req.responseValue)
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'South Side Derby Girls' })
})

router.post('/transactions/new', [
  check('verifier', 'Verifier must be a String').exists(),
  check('derbyGirl', 'DerbyGirl must be a String').exists(),
  check('item', 'Item must be a String').exists()
], SSRD.newTransaction, responseMiddleware)

router.get('/mine', SSRD.mine, responseMiddleware)

router.get('/chain', SSRD.getChain, responseMiddleware)

console.log('in router')
router.post('/login', [
    check('derbyName', 'DerbyName must be a String').exists(),
    check('password', 'Password must be a String').exists()
], SSRD.checkLogin, responseMiddleware)

module.exports = router
