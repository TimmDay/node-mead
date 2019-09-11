// syntactic sugar for promises, making the actual asyncness reqad more syncy
// async keyword marks a function that can use the await feature within it
// async keyword goes right before the function declaration

// ---------------------------------------------------------------------

// const doWork = () => {
// }
// console.log(doWork())
// returns undefined

// ---------------------------------------------------------------------

// const doWork = async () => {
// }
// console.log(doWork())
// returns a promise, fulfilled with undefined

// ---------------------------------------------------------------------

// const doWork = async () => {
//     // throw new Error('explosion')
//     return 'Tim'
// }
// console.log(doWork().then((res) => {
//     console.log(res)
// }).catch(e => console.log(e))
// )

// ---------------------------------------------------------------------

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('only positive numbers')
            }
            resolve(a + b)
        }, 2000)
    })
}

// much simpler than promise chaining
const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, -50)
    const sum3 = await add(sum2, 3)
    return sum3
}

doWork().then((res) => {
    console.log(res)
}).catch(e => console.log(e))
