const player = {
    name: "Player",
    health: 90,
    fullHealth: function(num1, num2){
        return this.health = num1 + num2
    }
  }
  
  const player1 = {
    name: "Player1",
    health: 70,
  }
  
  console.log(player1.health);
  player.fullHealth();
  player.fullHealth.call(player1,60,40)  //// calls the function directly regular arguments
  player.fullHealth.apply(player1,[60,40]) // calls the function directly array arguments
  
  const result = player.fullHealth.bind(player1, 20, 40) // returns new function
  console.log(result());