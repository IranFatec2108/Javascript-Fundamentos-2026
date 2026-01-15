// ===== LOOP COM INCREMENTO CUSTOMIZADO + Math.log() - 15/01/2026 =====
// Calculadora de logaritmo natural com intervalo definido pelo usuário

// ===== CAPTURA DE INPUTS =====
// Define que as três variáveis serão definidas pelo usuário (tipo let = flexíveis)
let inicio = prompt("Digite o número inicial: ");
let fim = prompt("Digite o número final: ");
let incremento = prompt("Digite o incremento: ");

// Converte os valores digitados de string para number
inicio = Number(inicio);
fim = Number(fim);
incremento = Number(incremento);


// ===== LOOP COM INCREMENTO CUSTOMIZADO =====
// Cria loop usando for:
// - x começa com valor de 'inicio'
// - continua enquanto x <= 'fim'
// - a cada iteração, x aumenta o valor de 'incremento'
for(let x = inicio; x <= fim; x += incremento) {

    // Math.log(x) retorna o logaritmo natural (base e) de x
    let resultado = Math.log(x);

    // Exibe no console: valor de x e seu logaritmo natural
    console.log(`Math.log(${x}) = ${resultado}`);
}

console.log("Fim do programa.");


// ===== CONCEITOS PRATICADOS =====
//  Loop for com incremento customizado (x += incremento)
//  Math.log() - logaritmo natural (ln)
//  Conversão de string para número
//  Template string
//  Console.log para debug
