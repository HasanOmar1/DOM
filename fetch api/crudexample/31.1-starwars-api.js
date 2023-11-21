const url = 'https://swapi.dev/api/'


async function starWars(){
    try{
        const mainResponse = await fetch(url) 
        // console.log(mainResponse)
        const mainResult = await mainResponse.json()
        // console.log(mainResult)
    
        const information = []

    
        const peopleUrl = await fetch(url + 'people/')
        console.log(peopleUrl)
        const peopleResult = await peopleUrl.json()
        console.log(peopleResult)
    
        const results = peopleResult.results
        for(let info of results){
            let planetUrl = info.homeworld
            // console.log(planetUrl)
            const fetchPlanet = await fetch(planetUrl)
            const planetsResults = await fetchPlanet.json()
            // console.log(planetsResults)        
            const obj = {}
            obj.name = info.name
            obj.height = info.height
            obj.hair = info.hair_color
            obj.planets = {
                name: planetsResults.name,
                population: planetsResults.population
            }
            information.push(obj)
        }
        renderInfo(information)
        console.log(information)        
    }catch(err){
        console.log(err)
    }

}
starWars()

const infoContainer = document.querySelector(`.all-container`)
const renderInfo = (info) =>  {
if(info){
    info.forEach(info => {
        //container
        const container = document.createElement('div')
        container.classList.add('container')
        infoContainer.appendChild(container)


        //name
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('small-containers')
        container.appendChild(nameContainer)

        const name = document.createElement('h3')
        const nameP = document.createElement('p')
        name.textContent = `Name: `
        nameP.textContent = info.name
        nameContainer.appendChild(name)
        nameContainer.appendChild(nameP)

        //hair
        const hairContainer = document.createElement('div')
        hairContainer.classList.add('small-containers')
        container.appendChild(hairContainer)

        const hair = document.createElement('h3')
        const hairP = document.createElement('p')
        hair.textContent = `Hair:`
        hairP.textContent = info.hair
        hairContainer.appendChild(hair)
        hairContainer.appendChild(hairP)

        //height
        const heightContainer = document.createElement('div')
        heightContainer.classList.add('small-containers')
        container.appendChild(heightContainer)

        const height = document.createElement('h3')
        const heightP = document.createElement('p')
        height.textContent = `Height:`
        heightP.textContent = info.height
        heightContainer.appendChild(height)
        heightContainer.appendChild(heightP)

        //planets name
        const planetContainer = document.createElement('div')
        planetContainer.classList.add('small-containers')
        container.appendChild(planetContainer)

        const planetName = document.createElement('h3')
        const planetNameP = document.createElement('p')
        planetName.textContent = `Planet's Name:`
        planetNameP.textContent = info.planets.name
        planetContainer.appendChild(planetName)
        planetContainer.appendChild(planetNameP)

        //planets population
        const planetPopulationContainer = document.createElement('div')
        planetPopulationContainer.classList.add('small-containers')
        container.appendChild(planetPopulationContainer)

        const planetPopulation = document.createElement('h3')
        const planetPopulationP = document.createElement('p')
        planetPopulation.textContent = `Planet's Population:`
        planetPopulationP.textContent = info.planets.population
        planetPopulationContainer.appendChild(planetPopulation)
        planetPopulationContainer.appendChild(planetPopulationP)
        
    })
}
}
renderInfo()


