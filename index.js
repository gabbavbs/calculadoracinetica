function calcularVelocidade() {
    var k = parseFloat(document.getElementById('kValue').value);
    var concentracaoInicial = parseFloat(document.getElementById('initialConcentration').value);
    var tempo = parseFloat(document.getElementById('time').value);
    
    var velocidade = k * concentracaoInicial;

    document.getElementById('resultado').innerHTML = "A velocidade da reação é: " + velocidade.toFixed(2) + " Mol/s";
}
function calcularVelocidade() {
    var k = parseFloat(document.getElementById('kValue').value);
    var concentracaoInicial = parseFloat(document.getElementById('initialConcentration').value);
    
    var velocidade = (k * concentracaoInicial);

    document.getElementById('resultado').innerHTML = "A velocidade da reação é: " + velocidade.toFixed(3) + " Mol/s";
}
