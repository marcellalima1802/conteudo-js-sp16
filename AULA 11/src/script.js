// Objetos

//Exemplo de objeto simples

const carro = {
    marca: "Porshe",
    modelo: 911,
    ano: 2022,
    acelerar: function () {
        return `${this.marca} ${this.modelo} acelerou.Vrum...`;
    },
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.acelerar());

console.log("");

const pessoa = {
    nome: "Marcella",
    idade: 18,
    altura: 1.75,
    registro: "999999999987",
    empregado: true,
      apresentar: function () {

        let alturaDecimal = this.altura;

        let infoEmpregado = (this.empregado === true) ? "Sim" : "Não";

        return `
        Meu nome é: ${this.nome}
        Minha idade é: ${this.idade}
        Minha altura é: ${alturaDecimal.toFixed(2)}
        E meu número de registro é: ${this.registro}
        Eu trabalho?: ${infoEmpregado}
        `;
    }
}

console.log(pessoa.apresentar());



document.querySelector("#ex1").innerHTML = "Laiza Pinheiro";

console.log(document);