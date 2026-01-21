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

// TERCEIRO EXEMPLO - ESCOPO LOCAL vs GLOBAL (SHADOWING)
const x = "variavel global";     // Constante no ESCOPO GLOBAL

const f1 = function(){
    const x = "variavel da função 1";  // NOVA constante LOCAL (não afeta global)
                                       // 'const' cria "cópia" independente
}
f1();                            // Executa f1(), mas não imprime nada

const f2 = function(){
    const x = "variável da função 2";  // OUTRA constante LOCAL (não afeta global)
}
f2();                            // Executa f2(), mas não imprime nada

console.log(x);                  // Imprime "variavel global" (não foi alterada!)
