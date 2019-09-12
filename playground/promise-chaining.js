require('../src/db/mongoose') //connect to db
const User = require('../src/models/user')

// change the age for a user
// get the toatl number of other users that have that same age

User.findByIdAndUpdate('5d78967809d5302664c2bfd5', { age: 1 })
.then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

const updateAgeAndCount = async () => {
    
}