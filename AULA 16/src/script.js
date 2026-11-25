// Eventos 

// Evento de click com addEventListener()
const paragrafo = document.querySelector("#ex1-p");
const botão = document.querySelector("#ex1-btn");

botão.addEventListener("click", () => {
    paragrafo.classList.toggle("estilo");
    paragrafo.innerHTML = "Somente a dor coletiva gera união.";
});



//botão.addEventListener("click", adicionarEstilo);

//function adicionarEstilo() {
 //   paragrafo.classList.toggle("estilo");
 //   paragrafo.innerHTML = "Somente a dor coletiva gera união";
//}