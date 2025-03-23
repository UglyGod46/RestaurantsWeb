const express = require('express')
const userRouter = require('./routes/user.routes')
const path = require('path')
const  PORT = process.env.PORT || 5433
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', userRouter)
app.listen(PORT, () => console.log(`Server started on post ${PORT}`))