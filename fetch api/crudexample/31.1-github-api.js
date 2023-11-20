const nameInput = document.querySelector('.username-value')
const cardContainer = document.querySelector('.card')
const form = document.querySelector('form')
const url = `https://api.github.com/users`

form.addEventListener('submit', async (e)=>{
e.preventDefault();
try{
    console.log(nameInput.value)
    const result = await fetch(url + `/${nameInput.value}`)
    console.log(result)
    if(!result.ok){
        throw new Error(`Failed to fetch data. Status ${result.status}`)
    }
    const response = await result.json()
    console.log(response)
    renderUser(response)

    
}catch(err){
console.log(err)
}
})

const renderUser = (user) => {
    cardContainer.innerHTML = ''
    if(user){
        
            const avatar = document.createElement('img')
            avatar.classList.add('avatar')
            avatar.src = user.avatar_url;
            cardContainer.appendChild(avatar)
    
            const h1 = document.createElement('h1')
            h1.innerText = `Username: ${user.login}`;
            cardContainer.appendChild(h1)
    
            const p = document.createElement('p')
            p.innerText = `Number of public repositories: ${user.public_repos}`
            cardContainer.appendChild(p)
    
            avatar.addEventListener('click' , () => {
                window.location = user.url
            })
            h1.addEventListener('click' , () => {
                window.location = user.url
            })
       
    }
    }
renderUser()