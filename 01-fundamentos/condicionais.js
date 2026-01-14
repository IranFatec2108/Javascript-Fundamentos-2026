// ===== EXERCÍCIO 1: Operadores Lógicos (03/01/2026) =====
// Praticando AND (&&) e OR (||)

var x = 60;
var y = 40;

if (((x < y) || (y > 20)) && (x > 50) ){
    console.log("x é maior que y");
} else {
    console.log("x não é maior que y");
}


// ===== EXERCÍCIO 2: Condicionais Aninhadas (05/01/2026) =====
// Sistema de velocidade do carro

var carro = 20;
var velocidade = 25;

if (carro < 40 && velocidade >= 100){
    console.log("carro está lento");
} else if (carro >= 40 && carro < 80 && velocidade >= 20){
    console.log("carro está em velocidade média");
} else if (carro >= 80 && velocidade >= 30){
    console.log("carro está rápido");
} else {
    console.log("carro está parado");
}
