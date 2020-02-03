const router = require('express').Router()
const usersValidator = require('../validators/users.validator')
const usersController = require('../controllers/users.controller')

router.get('/', usersController.index)
router.post('/', usersValidator.validacoes, usersController.store)
router.get('/email/:email', usersController.showByEmail)

module.exports = router