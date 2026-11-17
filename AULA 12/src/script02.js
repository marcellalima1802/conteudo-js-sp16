// Objetos 

//Criando objetos com construtores
function Carro(marca,modelo, ano, quantidadeRodas, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.quantidadeRodas = quantidadeRodas;
    this.cor = cor;
}

const carroMarcella = new Carro("Hyundai", "I30", 2012, 4, "preto");

const carroLarissa = new Carro("Honda", "Civic SI", 2008, 4, "branco");

console.log(carroMarcella);
console.log(carroLarissa);

carroMarcella.quilometragem = 80000;
carroLarissa.aroRoda = 18;

console.log("");

console.log(carroMarcella);
console.log(carroLarissa);

const carroLaiza = new Carro("Honda", "Civic", 2002, 4,"vermelho");

console.log(carroLaiza);

