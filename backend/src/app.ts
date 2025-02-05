import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import cors from 'cors'

import usersRoutes from './routes/users.routes' 
import todosRoutes from './routes/todos.routes'

dotenv.config()

const connectDB = async () => await mongoose.connect('mongodb://127.0.0.1:27017/todos_db')

try 
{
    connectDB()
    console.log('Connect DB success')
}
catch(err)
{
    console.log('Connect DB error - ', err)
}



const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRoutes)
app.use('/todos', todosRoutes)

app.get('/', (req, res) => {
    res.json({ status: 'worked' })
})

app.listen(process.env.PORT, () => {
    console.log('Server running ' + process.env.PORT)
})