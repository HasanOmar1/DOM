
const greaterOrLess = (num) => {
    return new Promise((resolve , reject) => {
    
    if(num > 10){
        resolve()
    }
    if(num < 10){
        reject()
    }
})
}

greaterOrLess(15)
.then(() => {
    console.log(`Greater than 10!`)
})
.catch(() => {
    console.log(`Less than 10!`)
}) 