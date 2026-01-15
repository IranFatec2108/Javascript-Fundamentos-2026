// VALIDAÇÃO DE IDADE - 15/01/2026 =====
// Verifica se pessoa é maior de idade com múltiplas validações

const input = prompt("Em que ano você nasceu?");

// Pega o ano atual automaticamente (2026)
const anoAtual = new Date().getFullYear();


// ===== VALIDAÇÃO 1: Verifica se tem 4 dígitos =====
// Exemplo: "95" (errado) vs "1995" (certo)
if (input.length !== 4) {
    alert("Erro: Digite um ano com 4 dígitos (ex: 1995)");
    
// ===== VALIDAÇÃO 2: Verifica se é número =====
// Exemplo: "abcd" (errado) vs "1995" (certo)
} else if (isNaN(Number(input))) {
    alert("Erro: Digite apenas números válidos!");
    
// ===== VALIDAÇÃO 3: Verifica se o ano faz sentido =====
} else {
    const anoNascimento = Number(input);
    
    // Aceita apenas anos entre 1940 e ano atual
    // Exemplo: "1800" (muito antigo) ou "2050" (futuro) = inválido
    if (anoNascimento < 1940 || anoNascimento > anoAtual) {
        alert(`Ano inválido! Digite entre 1940 e ${anoAtual}`);
        
    } else {
        // ===== CÁLCULO DA IDADE =====
        const idade = anoAtual - anoNascimento;
        
        // ===== VERIFICA MAIORIDADE =====
        if (idade >= 18) {
            alert(`Você é maior de idade. Sua idade é ${idade} anos.`);
        } else {
            alert(`Você é menor de idade. Sua idade é ${idade} anos.`);
        }
    }
}


// ===== CONCEITOS PRATICADOS =====
// .length - tamanho da string
//  new Date().getFullYear() - pega ano atual automaticamente
//  Validação em cascata (if/else if/else)
//  Validação de range (mínimo e máximo)
//  Operador lógico OR (||)
//  Cálculo de idade
