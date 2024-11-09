class heroClass {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
            break;

            case "guerreiro":
                ataque = "espada";
            break;

            case "monge":
                ataque = "artes marciais";
            break;

            case "ninja":
                ataque = "shuriken";
            break;
        }
        
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let Ninja = new heroClass("Juca", 23, "ninja");
Ninja.atacar();

let Mago = new heroClass("Pedro", 33, "mago");
Mago.atacar();