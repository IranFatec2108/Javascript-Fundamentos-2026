// ===== SAUDAÇÃO COM VARIAÇÕES - 15/01/2026 =====
// Sistema de saudação que considera: idioma + variação regional + formalidade

// ===== CAPTURA E NORMALIZA INPUTS =====
// .toLowerCase() deixa tudo minúsculo (evita erro de digitação)
var idioma = prompt("Qual o seu idioma? (pt/en/es/fr)").toLowerCase();
var variacao = prompt("Digite uma variação (br/pt/us/uk)").toLowerCase();
var dialeto = prompt("Digite um dialeto (formal/informal)").toLowerCase();


// ===== PORTUGUÊS (BR/PT) =====

// Português formal (Olá)
if ((idioma === "pt") && (variacao === "br" || variacao === "pt") && (dialeto === "formal")) {
    alert("Olá");

// Português informal (Oi)
} else if ((idioma === "pt") && (variacao === "br" || variacao === "pt") && (dialeto === "informal")) {
    alert("Oi");


// ===== INGLÊS AMERICANO (US) =====

// Inglês US formal (Hello)
} else if ((idioma === "en") && (variacao === "us") && (dialeto === "formal")) {
    alert("Hello");

// Inglês US informal (Hi)
} else if ((idioma === "en") && (variacao === "us") && (dialeto === "informal")) {
    alert("Hi");


// ===== INGLÊS BRITÂNICO (UK) =====

// Inglês UK formal (Hello mate)
} else if ((idioma === "en") && (variacao === "uk") && (dialeto === "formal")) {
    alert("Hello mate");

// Inglês UK informal (Hiya)
} else if ((idioma === "en") && (variacao === "uk") && (dialeto === "informal")) {
    alert("Hiya");


// ===== FALLBACK =====
// Captura qualquer combinação não prevista
} else {
    alert("Idioma/variação não reconhecido");
}


// ===== CONCEITOS PRATICADOS =====
//  .toLowerCase() - normalização de entrada
//  Operador lógico AND (&&) - múltiplas condições simultâneas
//  Operador lógico OR (||) - aceita BR ou PT
//  Condicionais aninhadas complexas
//  Else if em cascata (vários cenários)
//  Fallback (else final para casos não cobertos)
