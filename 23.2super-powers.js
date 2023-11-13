const storm = {
    // add code here
    superPower: `flying`,
    func: printSuperPower
    }

    function printSuperPower() {
    console.log("my superpower is " + this.superPower)
    }

    storm.func()