const usersModel = require('../models/users.model')

module.exports = {
    async test(req, res) {
        res.send("Await can stop a promisse, but an async function becomes a new promisse")
    },
    async index(req, res) {
        const lista = await usersModel.lista()

        if (lista) {
            return res.status(200).send(lista)
        }
        return res.status(404).send("Something went wrong")
    },
    async store(req, res) {
        const usuario = req.body

        try {
            await usersModel.insere(usuario)
            return res.status(201).send("Success!!")
        } catch (e) {
            return res.status(404).send("Something went wrong")
        }
    },
    async showByEmail(req, res) {
        const email = req.params.email
        try {
            const retorno = await usersModel.buscarPorEmail(email)
            return res.send(retorno)
        } catch (e) {
            return res.status(404).send("Something went wrong")
        }
    }
}