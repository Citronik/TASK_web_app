const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
var seq = require('./models/index')

//const bcrypt = require('bcryptjs');
//const { v4: uuidv4 } = require('uuid');
//uuidv4();

const app = express()

// middlewares

app.use(cors())
app.use(bodyParser.json())

// routers
const userRouter = require('./routes/userRouter');
const taskRouter = require('./routes/taskRouter');
app.use('/users', userRouter)
app.use('/tasks', taskRouter)



app.listen(3000, () => {
    console.log('Server is running on http://10.0.0.10:3000')
})