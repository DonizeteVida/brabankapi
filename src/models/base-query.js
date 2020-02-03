const con = require('../database/conexao-db')

module.exports = (query, params) => {
    return new Promise((resolve, reject) => {
        con.query(query, params || "", (result, error) => {
            if (error) return reject(error)
            resolve(result)
        })
    })
}