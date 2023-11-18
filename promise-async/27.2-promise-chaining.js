
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

const newArr = [`Hello ` , `world` , `asd`, 19]

makeAllCaps(newArr)
.then(upperArray => console.log(sortArr(upperArray)))
.catch(error => console.log(error))
