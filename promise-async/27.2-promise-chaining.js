
const  makeAllCaps = (arr) => {
    const array = []
    return new Promise((resolve , reject) => {
        for(let word of arr){
            if(typeof word === `string`){
                array.push(word.toUpperCase())
            }
            else{
                reject('Only strings allowed!')
            }
        }
        resolve(array)
    })

}

const sortArr = (arr) => {
    return arr.sort()
}

const newArr = [`Hello ` , `world` , `asd`]


makeAllCaps(newArr)
.then(capArr => {
    let big = capArr
    return makeAllCaps(big)
})
.then(arr => {
    console.log(sortArr(arr))
})
.catch(error => console.log(error))
