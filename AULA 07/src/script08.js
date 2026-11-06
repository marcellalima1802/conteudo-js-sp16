// Exercício 8: Calcule a área de um círculo.

alert("Área do Círculo");

let raioCirculo = parseFloat(prompt("Informe o valor do raio do círculo em centímetros: "));

let areaCirculo = Math.PI * raioCirculo * raioCirculo;

alert("A área do círculo de raio " + raioCirculo + "cm é: " + areaCirculo.toFixed(2) + "cm²");