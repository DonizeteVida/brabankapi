const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '52.4.2.59',
    port: 3306,
    user: 'profrafa',
    password: 'bcd127',
    database: 'brabank'
})

conexao.connect()

module.exports = conexao