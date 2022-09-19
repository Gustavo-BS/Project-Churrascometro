// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");

var resultado = document.getElementById("resultado")

function calcular(){
    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;

    const qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
    const qtdTotalCerveja = cervejaPP(duracao) * adultos;
    const qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas)

    resultado.innerHTML =  ` 
    <div class="resultado-display">
        <img src="https://img.icons8.com/emoji/48/000000/cut-of-meat-emoji.png"/>
        <p>${qtdTotalCarne/1000} kg de Carne</p>
    </div>`
    ;

    resultado.innerHTML += `
    <div class="resultado-display">
        <img src="https://img.icons8.com/emoji/48/000000/beer-mug.png"/> 
        <p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>
    </div>`;

    resultado.innerHTML += `
    <div class="resultado-display">
        <img src="https://img.icons8.com/emoji/48/000000/cup-with-straw-emoji.png"/>
        <p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas de Bebida</p>
    </div>`;
}

function carnePP(valor){
    if(valor >= 6)
        return 650;
    else
        return 400;   
}

function cervejaPP(valor){
    if(valor >= 6)
        return 2000;
    else
        return 1200;   
}

function bebidasPP(valor){
    if(valor >= 6)
        return 1500;
    else
        return 1000;   
}