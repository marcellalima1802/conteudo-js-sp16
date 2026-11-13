// Funções 

// Expressão de Funções
const multiplicar = function (a, b){
    return a * b;
};

console.log(multiplicar);

console.log("");

// Função executando outra função
function executarFunçao(funcao){
    return funcao();
}

const exibirSaudacao = function (){
    return "Olá, SP16";
};

console.log(executarFunçao(exibirSaudacao));

const soma = function (a = 10, b = 6) {
    return a + b;
};

console.log(soma());

console.log("");

//Arrow Functions
const multiplicar2 = (a, b) => a + b;

console.log(multiplicar2(5, 6));

console.log("");

//Arrow Function com um parâmetro
const potencia = a => a * a;

console.log(potencia(5));

console.log("");

// Chamada de Arrow Function
const dizerOla = () => { return "Olá Seguimores!"; };

console.log(dizerOla());

console.log("");









