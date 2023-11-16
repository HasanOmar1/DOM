
const url = "https://api.chucknorris.io/jokes/random"

const fetchData = async()=>{
    const response = await fetch(url)
    const result = await response.json()
    console.log(result.value);
}

fetchData()