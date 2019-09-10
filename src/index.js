const express = require('express')
require('./db/mongoose') //ensure file runs and mongoose connection to db occurs
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

// configure express to auto parse the incoming json for us, to give us a usable object
app.use(express.json()) //app.use -> customise our server

app.post('/users', (req,res) => {
  const user = new User(req.body)

  user.save().then(() => {
    res.status(201).send(user)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.get('/users', (req,res) => {
  User.find({}).then((users) => {
    console.log(users);
    res.send(users)
  }).catch((err) => {
    res.status(500).send()
  })
})

app.get('/users/:id', (req,res) => {
  console.log(req.params)
  const _id = req.params.id

  User.findById(_id).then((user) => {
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  }).catch((err) => {
    res.status(500).send()
  })
  // User.find({ _id: })
})

app.post('/tasks', (req,res) => {
  const task = new Task(req.body)

  task.save().then(() => {
    res.status(201).send(task)
  }).catch((err) => {
    res.status(400).send(err)
  })
})


app.listen(port, () => {
  console.log('server is up on port ', port);
})