require('../src/db/mongoose') //connect to db
const User = require('../src/models/user')

// change the age for a user
// get the toatl number of other users that have that same age

// User.findByIdAndUpdate('5d78967809d5302664c2bfd5', { age: 1 })
// .then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d75b4fadb41412d3352ab0f', 0)
.then(count => console.log(count))
.catch(e => console.log(e))