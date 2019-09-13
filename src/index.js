const express = require('express')
require('./db/mongoose') //ensure file runs and mongoose connection to db occurs

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// configure express to auto parse the incoming json for us, to give us a usable object
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log('server is up on port ', port);
})