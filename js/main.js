const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
var variavel = queryString("robotron");

const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleo":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "perna":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguete":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.controle, evento.target.dataset.peca);
    })
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
};

function atualizaEstatistica(operacao, peca) {

    estatistica.forEach( (elemento) => {
        if(operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
    })
};

function trocaImagem(cor){
    passaValor(cor);
    queryString(cor);
 }

 var passaValor = function(valor){
    window.location = "robotronView.html?robotron="+valor;
}

function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {
        return setColor(param_value);   
    }   
    else {   
        return undefined;   
    }   
}

function setColor(color) {
    document.querySelector(".robo").src="img/Robotron 2000 - " + color + ".png";

    if(color == "Azul") {
        color = "blue";
        document.querySelector(".box1").style="background-color: " + color;
        document.querySelector(".controle1").style="background-color: " + color;
        document.querySelector(".controle2").style="background-color: " + color;
        document.querySelector(".controle3").style="background-color: " + color;
        document.querySelector(".controle4").style="background-color: " + color;
        document.querySelector(".controle5").style="background-color: " + color;
    }

    if(color == "Rosa") {
        color = "pink";
        document.querySelector(".box1").style="background-color: " + color;
        document.querySelector(".controle1").style="background-color: " + color;
        document.querySelector(".controle2").style="background-color: " + color;
        document.querySelector(".controle3").style="background-color: " + color;
        document.querySelector(".controle4").style="background-color: " + color;
        document.querySelector(".controle5").style="background-color: " + color;
    }

    if(color == "Vermelho") {
        color = "red";
        document.querySelector(".box1").style="background-color: " + color;
        document.querySelector(".controle1").style="background-color: " + color;
        document.querySelector(".controle2").style="background-color: " + color;
        document.querySelector(".controle3").style="background-color: " + color;
        document.querySelector(".controle4").style="background-color: " + color;
        document.querySelector(".controle5").style="background-color: " + color;
    }

    if(color == "Amarelo") {
        color = "yellow";
        document.querySelector(".box1").style="background-color: " + color;
        document.querySelector(".controle1").style="background-color: " + color;
        document.querySelector(".controle2").style="background-color: " + color;
        document.querySelector(".controle3").style="background-color: " + color;
        document.querySelector(".controle4").style="background-color: " + color;
        document.querySelector(".controle5").style="background-color: " + color;
    }
}