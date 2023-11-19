
const  makeAllCaps = (arr) => {
    const array = []
    return new Promise((resolve , reject) => {
        for(let word of arr){
            if(typeof word === `string`){
                array.push(word.toUpperCase())
                resolve(array)
            }
            else{
                reject('Only strings allowed!')
            }
        }
    })

}

const sortArr = (arr) => {
    return arr.sort()
}

const newArr = [`Hello ` , `world` , `asd`]

makeAllCaps(newArr)
.then(upperArray => console.log(sortArr(upperArray)))
.catch(error => console.log(error))
