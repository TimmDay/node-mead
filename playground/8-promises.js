const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// // nested promises -> nested and complex
// add(1,2).then((sum) => {
//     console.log(sum)

//     add(sum,5).then(sum2 => {
//         console.log(sum2)
//     }).catch(e => {
//         console.log(e)
//     })
// }).catch(e => {
//     console.log(e)
// })


// PROMISE CHAINING
// if the then block returns a promise, the result of that is available in another chained then
add(1,2)
.then((sum) => {
    console.log(sum)
    return add(sum, 4) //returns a promise for the next then call. only one catch at end
}).then(sum2 => {
    console.log(sum2)
    return add(sum2, 35)
}).then((sum3) => {
    console.log(sum3)
})
.catch(e => console.log(e))