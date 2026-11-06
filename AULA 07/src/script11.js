// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

alert("idade em dias");

let idadeAnos = parseInt(prompt("Informe quantos anos você tem: "));

let idadeMeses = parseInt(prompt("Informe quantos meses se passaram desde seu último ániversário: "));

let idadeDias = parseInt(prompt("Informe quantos dias se passaram desde que completou mais um mês após seu aniversário: "));

let anosEmDias = idadeAnos * 365;
let mesesEmDias = idadeMeses * 30;


let idadeEmDiasTotais = anosEmDias + mesesEmDias+ idadeDias;

alert ("Sua idade em dias é de: " + idadeEmDiasTotais + "dias");
