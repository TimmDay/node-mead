require('../src/db/mongoose') //connect to db
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d78af9ed0178f25f485a661')
// .then((result) => {
//     console.log(result)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch(err => console.log(err))

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}
deleteTaskAndCount('5d7532039d650e253818b93b')
.then(count => console.log(count))
.catch(e => console.log(e))