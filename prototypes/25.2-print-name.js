const obj = {
    name: "John",
    getName(){
        console.log(`My name is ${this.name}`)

    },
    getDelayedName(){
        setTimeout(function(){
            this.getName() 
        }.bind(this), 1000)
    }
}

obj.getDelayedName()