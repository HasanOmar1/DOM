const url = 'https://swapi.dev/api/'


async function starWars(){
    const mainResponse = await fetch(url) 
    // console.log(response)
    const mainResult = await mainResponse.json()
    // console.log(result)

    const information = []
 

    const peopleUrl = await fetch(url + 'people/')
    // console.log(peopleUrl)
    const peopleResult = await peopleUrl.json()
    // console.log(peopleResult)

    const results = peopleResult.results
    for(let info of results){
        let planetUrl = info.homeworld
        // console.log(planetUrl)
        const fetchPlanet = await fetch(planetUrl)
        const planetsResults = await fetchPlanet.json()
        // console.log(planetsResults)        
        let obj = {}
        obj.name = info.name
        obj.height = info.height
        obj.hair = info.hair_color
        obj.planets = {
            name: planetsResults.name,
            population: planetsResults.population
        }
        information.push(obj)
    }
    console.log(information)

}

starWars()


