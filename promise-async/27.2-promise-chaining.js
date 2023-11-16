
const words = [`Kola`, 5,`fifa` , `asd`, `SpongeBob` , `noIce`]

    const makeAllCaps = () => {
        return new Promise((resolve , reject) =>{
            const upperCase = words.map(u => u.toUpperCase())
            console.log(upperCase)
        })
    }
    
    const sortWords = () => {
        return new Promise((resolve , reject) => {
            const sorted = words.map(u => u.toUpperCase()).sort()
            resolve(sorted)
            for(let strings of words){
                if(sorted.includes(typeof strings !== string)){
                        return reject()
        
                    }
            }
            

        })
}


// console.log(makeAllCaps())
sortWords()
.then((data) =>console.log(data) )
.catch(() => console.log('not string!'))