// Exercício 9: Calcule a área de um trapézio.

alert("Área do Trapézio");

let baseMaior = parseFloat(prompt("Informe o valor da base maior do trapézio em centímetros: "));

let baseMenor = parseFloat(prompt("Informe o valor da base menor do trapézio em centímetros: "));

let alturaTrapezio = parseFloat(prompt("Informe a altura do trapézio em centímetros: "));

let areaTrapezio = ((baseMaior + baseMenor) * alturaTrapezio) / 2;

alert("A área total do trapézio de base maior " + baseMaior + "cm, base menor " + baseMenor + "cm e altura " + alturaTrapezio + "cm é: " + areaTrapezio + "cm²");