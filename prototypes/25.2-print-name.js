const obj = {
    name: "John",
    getName(){
        let objName = this;

        setTimeout(function (){
            console.log(`My name is : ${objName.name}`)
        } , 1000)
    },
}

obj.getName()