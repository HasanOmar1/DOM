function moveForward(playerId){
    const car = document.querySelector(`#player${playerId}-race .active`)
    if(car.nextElementSibling){
        car.nextElementSibling.classList.add('active')
        car.classList.remove('active')
    }
    else{
        alert(`The winner is Player ${playerId} ! Play again?`)
        window.location.reload()
    }
}

function controls(e){
    if(e.key === 'e'){
        moveForward(1)
    }
    else if(e.key === 'c'){
        moveForward(2)
    }
}

document.addEventListener('keyup' , controls)