
const greaterOrLess = (num) => {
    return new Promise((resolve , reject) => {
    
    if(num > 10){
        resolve()
    }
    else{
        reject()
    }
})
}

greaterOrLess(10)
.then(() => {
    console.log(`Greater than 10!`)
})
.catch(() => {
    console.log(`Less than 10!`)
}) 