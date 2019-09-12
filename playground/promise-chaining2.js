require('../src/db/mongoose') //connect to db
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d78af9ed0178f25f485a661')
.then((result) => {
    console.log(result)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch(err => console.log(err))