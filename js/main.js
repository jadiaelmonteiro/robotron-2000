const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
});

somar.addEventListener("click", () => { manipulaDados("somar") })

subtrair.addEventListener("click", () => { manipulaDados("subtrair") });

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
};