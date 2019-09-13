const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// USER ENDPOINTS
router.post('/users', async (req,res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
  // user.save().then(() => {
  //   res.status(201).send(user)
  // }).catch((err) => {
  //   res.status(400).send(err)
  // })
})

router.get('/users', async (req,res) => {
  try {
    const users = await User.find({})
    console.log(users);
    res.send(users)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/users/:id', async (req,res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id)
    if (!user) return res.status(404).send()
    res.send(user)
  } catch (err) {
    res.status(500).send(err)
  }
})

// the update is stored as json on the request body
// TODO: how to add a body to the request?
// options: new, return new user as opposed to pre-updated user
router.patch('/users/:id', async (req,res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name','age','email','password']
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))
  if (!isValidOperation) return res.status(400).send({error: 'invalid updates'})
  
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!user) return res.status(404).send({ error: 'user not found' })
    res.send(user)
  } catch (err) {
    res.send(500).send(err)
    // TODO: validation issue. 400 bad request
    // res.status(500).send(err) //server related issue
  }
})

router.delete('/users/:id', async (req,res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if(!deletedUser) return res.status(404).send({ error: 'item does not exist' })
    res.send(deletedUser)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router