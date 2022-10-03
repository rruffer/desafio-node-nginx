const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Rodolfo')`

connection.query(sql)

app.get('/', (_req, res) => {
    let lisPeople = '<p><h1>Full Cycle Rocks!</h1></p>'
    lisPeople += '<p>- Lista de nomes cadastrada no banco de dados.</p>'

    connection.query(`SELECT * FROM PEOPLE`, (_err, result, _fields) => {
        lisPeople += '<ul>'
        result.forEach(people => lisPeople += `<li>${people.name}</li>`);
        lisPeople += '</ul>'
        res.send(lisPeople)
    })
})

app.listen(port, () => console.log(`Rodando na porta ${port}`))