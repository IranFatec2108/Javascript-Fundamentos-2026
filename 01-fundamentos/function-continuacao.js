// PRIMEIRO EXEMPLO - FUNÇÃO COM PARÂMETROS E RETORNO
const soma = function(x, y) { 
    // 'soma' é uma constante que guarda uma função
    // Esta função recebe dois parâmetros: x e y (valores de entrada)
    const resultado = x + y;     // Cria constante LOCAL 'resultado' que soma x + y
    return resultado;            // Devolve o valor da soma para o escopo global
}

let resultado = soma(10, 20);  // Chama a função passando 10 para x, 20 para y
                               // A variável 'resultado' (global) recebe 30
console.log(resultado);        // Imprime 30 no console

//////////////////////////////////////////////////////////////

// SEGUNDO EXEMPLO - FUNÇÕES ANINHADAS (ESCOPO LOCAL)
const principal = function(){
    // 'principal' guarda uma função que não recebe parâmetros
    
    const f1 = function() {      // Cria função f1 LOCAL (só existe dentro principal)
        console.log("Olá sou a F1");
    }
    const f2 = function() {      // Cria função f2 LOCAL (só existe dentro principal)
        console.log('Olá eu sou a F2');
    }
    f1();                       // Chama f1() DENTRO do escopo da principal 
    f2();                       // Chama f2() DENTRO do escopo da principal 
}
principal();                    // Executa principal(), que chama f1() e f2()

//////////////////////////////////////////////////////////////////////



// SISTEMA DE CALCULADORA FLEXÍVEL - FUNÇÕES COMO PARÂMETROS
var somaa = function (x, y){
    // 'somaa' guarda função que recebe x, y e RETORNA soma
    return x + y;  // Criação de função específica para soma
}

var sub = function (x, y){
    // 'sub' guarda função que recebe x, y e RETORNA subtração
    return x - y;
}

var multi = function (x, y){
    // 'multi' guarda função que recebe x, y e RETORNA multiplicação
    return x * y;
}

var div = function (x, y){
    // 'div' guarda função que recebe x, y e RETORNA divisão
    return x / y;
}

// CALCULADORA UNIVERSAL - O CORAÇÃO DO SISTEMA
var calculadora = function(x, y, operacao){
    // 'calculadora' recebe: números x,y E UMA FUNÇÃO (operacao)
    // 'operacao' é espaço que ACEITA QUALQUER função (somaa, sub, etc)
    return operacao(x, y);  // CHAMA a função que foi passada como parâmetro
                            // Substitui 'operacao' por somaa, sub, multi, ou div
}

// USO: Passo os números + ESCOLHO a operação
calculadora(10, 20, somaa);  // operacao=somaa → faz 10+20=30
// calculadora(10, 20, sub); // operacao=sub → faria 10-20=-10
// calculadora(10, 20, multi); // operacao=multi → faria 10*20=200
