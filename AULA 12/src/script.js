// Objetos

// Propriedades de Objetos
const pessoa = {
    nome: "Marcella",
    altura: 1.75,
    idade: 18,
};

console.log(pessoa);

//console.log(pessoa[respostaUsuario]);

console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.log("");

// Alterando, adicionando e Excluindo propriedades
pessoa.idade = 25;
console.log(pessoa);
console.log(pessoa.idade);

console.log("");

pessoa.ultimoNome = "Sousa";
console.log(pessoa);
console.log(pessoa.ultimoNome);

console.log("");


delete pessoa.altura;
console.log(pessoa);

console.log("");

// Verificando existência de propriedade em obejto
let testePropriedade = ("idade" in pessoa);

console.log(testePropriedade);

console.log("");

//Objetos Aninhados 
const pessoa2 = {
    nome: "Marisa",
    sobrenome: "Monte",
    profissão: "Cantora",
    instrumento: {
        tipo: "cordas",
        material: "madeira",
    },
};

console.log(pessoa2);
console.log(pessoa2.instrumento);

console.log("");

// Métodos de Objetos
const carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 1998,
    acelerar: function () {
        return `O ${this.marca} ${this.modelo} acelerou.`;
    }

};

console.log(carro.acelerar());

console.log("");

//Adicionando Método em Objeto
carro.derrapar = function () {
    return `O ${this.marca} ${this.modelo} derrapou.`;
};

console.log(carro.derrapar());

console.log(carro);




