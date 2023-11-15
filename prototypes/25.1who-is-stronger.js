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


// <!-- The problem with the code is that when you invoke the
//      whoIsStronger function with hero.getStrength, 
//      the this context inside the getStrength method of the
//       hero object is lost. This happens because getStrength
//        is called as a standalone function, and within the function,
//         this does not refer to the hero object. As a result,
//          the comparison in whoIsStronger is not working as expected.

// To fix the code and make it print "I am stronger,"
//  you can use the bind method to explicitly bind the
//   this context to the hero object when calling getStrength.-->
