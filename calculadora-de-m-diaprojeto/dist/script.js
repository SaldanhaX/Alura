var valorEmEuro = 2500;
var cotacaoDoEuro = 5.51;

var valorEmReal = valorEmEuro * cotacaoDoEuro;
valorEmReal = valorEmReal.toFixed(2);

alert("R$ " + valorEmReal);