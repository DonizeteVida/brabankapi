const baseQuery = require('./base-query')

module.exports = {
    lista() {
        return baseQuery("SELECT * FROM usuario")
    },
    insere(usuario) {
        return baseQuery("INSERT INTO usuario SET ?", usuario)
    },
    buscarPorEmail(email) {
        return baseQuery("SELECT * FROM usuario WHERE email = ?", email)
    }
}

/**
 * 
*     async lista(){
        const result = await baseQuery("SELECT * FROM usuario")
        return result
    }
 */

//Uma função async se torna uma nova promisse, se eu espero pra resolver, eu acabo demorando, o que me torna 
//Assincrono novamente, é melhor retornar a promisse e deixar que alguém resolva