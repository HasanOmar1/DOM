const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10; // power 58
    } 
    else return this.power;
    }}

    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    }
     else return "You are stronger";
    }

const stronger = hero.getStrength.bind(hero)
console.log(whoIsStronger(stronger))
    

// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".

//getStrength() inside whoIsStronger function is not defined
