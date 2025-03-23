const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'fdgod46',
    host: 'localhost',
    port: 5432,
    database: 'restdb'
})

module.exports = pool