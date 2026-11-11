// Funções 

let novoCarro = "Audi";

function exibirCarro() {
    let novoCarro = "Porsche";
    console.log(novoCarro);
}

exibirCarro();

console.log("");

 // Função com 4 parâmetros

function saudacao(nome, sobrenome, idade, altura) {
    let saudacaoMensagem = `Olá, eu me chamo ${nome} ${sobrenome}, tenho ${idade} anos de idade e ${altura}m de altura.`;

    return saudacaoMensagem;
}

console.log(saudacao("Marcella", "Lima", 18, 1.75));

console.log("");

// Função com 1 parâmetro

function paraCelsius(grausFahrenheit) {

    let grausCelsius = (5 / 9) * (grausFahrenheit - 32);

    let mensagemRetorno = `${grausFahrenheit}° Fahrenheit em Celsius é igual a: ${grausCelsius}°C`;

    return mensagemRetorno;
}

// let grausFahrenheit = parseFloat(prompt('Informe um valor de temperatura em Fahrenheit para converter em Celsius:'));

const elementoh3 = document.querySelector(".ex1");

elementoh3.innerHTML = paraCelsius(212);

elementoh3.style.fontFamily = "sans-serif";


// Valor padrão para parâmetros

function soma(a = 1, b = 2) {
    return a + b;
}

console.log(soma(10, 4));
console.log(soma(4));    
console.log(soma()); 

console.log("");

// Utilizando valor retornado da função em uma expressão matemática

function multiplicar (a, b) {
    return a * b;
}

let resultadoExpressao = multiplicar(5, 10) / 2;

console.log(resultadoExpressao);

console.log("");

// Utilizando dois retornos em uma função
function subtracao (a, b){

    return "Somente a dor coletiva gera união.";

    return a - b;

}

let resultado = subtracao (10, 5);
console.log(resultado);

console.log("");


// Utilizando return para finalizar execução utilizando condição lógica

function verificarIdade (idade) {
    if (idade < 18) {
        return "Você é menor de idade.";
    }
    return "Você é maior de idade.";
}

let resultado2 = verificarIdade(16);

console.log(resultado2);


