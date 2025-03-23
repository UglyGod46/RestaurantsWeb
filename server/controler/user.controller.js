const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {username, password, role} = req.body
        const newPerson = await db.query('insert into users (username, password, role) values ($1, $2, $3) RETURNING *', [username, password, role])
        res.json(newPerson.rows)
    }
    async getUsers(req, res) {
        const users = await db.query('select * from users')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('select * from users where id = $1', [id])
        res.json(user.rows)
    }
    async updateUser(req, res) {
        const {id, username, password, role} = req.body
        const user = await db.query('update users set username=$1, password=$2, role=$3 where id=$4 RETURNING *', [username, password, role, id])
        res.json(user.rows)
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('delete from users where id = $1', [id])
        res.json(user.rows)
    }
}

module.exports = new UserController()