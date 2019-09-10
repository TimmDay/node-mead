// user model
const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('email invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('worst password ever')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('age must be positive')
      }
    }
  }
})

module.exports = User 


// example: create instance of model
// const me = new User({
//   name: '  Tim Day ',
//   email: '  TIM@juice.com',
//   password: '193$%FE '
// })

// example: create in db
// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log(error)
// })