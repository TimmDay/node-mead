const mongoose = require('mongoose')

// Task Model
const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = Task

// // task instance
// const task = new Task({
//   description: '   cook dinner     ',
// })

// task.save().then(() => {
//   console.log(task);
// }).catch(err => console.log(err))
