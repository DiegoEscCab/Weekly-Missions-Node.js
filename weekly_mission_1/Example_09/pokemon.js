class Pokemon {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(this.name +"te esta saludando");
    }

    sayMessage(message){
        console.log(`${message}`)
    }
}

module.exports = Pokemon