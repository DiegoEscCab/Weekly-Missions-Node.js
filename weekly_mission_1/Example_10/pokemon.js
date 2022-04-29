export default class myPokemon {
    constructor(name) {
        this.name = name
    }

    sayHello(message) {
        console.log(`Hola yo soy un ${this.name}`)
    }
}