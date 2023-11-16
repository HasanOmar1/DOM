
const words = [`Kola` , `fifa` , `asd`, `SpongeBob` , `noIce`]



const makeAllCaps = () => {
    return new Promise((resolve , reject) =>{
        const upperCase = words.map(u => u.toUpperCase())
        console.log(upperCase)
    })
}

const sortWords = () => {
    return new Promise((resolve , reject) => {
        const sorted = words.map(u => u.toUpperCase()).sort()
        console.log(sorted)

    })
}

console.log(makeAllCaps())
console.log(sortWords())