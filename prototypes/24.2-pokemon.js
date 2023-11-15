function Pokemon(pokemonName ,pokemonType ,pokemonAttackList ){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

let pokemon1 = new Pokemon(`John` , `ground` , [`knife` , `fireball`] )
let pokemon2 = new Pokemon(`George` , `water` , [`pistol` , `iceball`])
let pokemon3 = new Pokemon(`Kola` , `air` , [`knife` , `m4a1` , `RPG`])

Pokemon.prototype.callPokemon = function(){
    return `I choose you ${this.name}`
}

Pokemon.prototype.attack = function(attackNumber){
    let attackType = this.attackList[attackNumber]
    return `${this.name} used ${attackType}`
    
}

console.log(pokemon1.callPokemon())
console.log(pokemon1.attack(0))

console.log(pokemon2.callPokemon())
console.log(pokemon2.attack(1))

console.log(pokemon3.callPokemon())
console.log(pokemon3.attack(2))
