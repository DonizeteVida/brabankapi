const { check, body } = require('express-validator')
const usersModel = require('../models/users.model')

module.exports = {
    validacoes() {
        return [
            check('nome').isLength({ min: 5, max: 100 })
            .withMessage('Deve ter entre 5 e 100 caracteres'),
            check('email').isEmail()
            .withMessage('Deve ser um email válido'),
            check('cpf').isNumeric()
            .withMessage('Deve ser apenas números'),
            check('sexo').isLength({ min: 1, max: 1 })
            .withMessage('Deve ter apenas um caracter (M ou F)'),
            check('senha').isLength({ min: 6, max: 15 })
            .withMessage('A senha deve ter entre 6 e 15 caracteres'),
            body('email').custom(async email => {
                try {
                    const result = usersModel.buscarPorEmail(email)

                    if (result) {
                        return new Promise.reject("Já existe um blabla")
                    }
                } catch (e) {
                    throw e
                }
            })
        ]
    }
}