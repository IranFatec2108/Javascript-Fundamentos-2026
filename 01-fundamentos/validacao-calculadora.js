// ===== CALCULADORA COM VALIDAÇÃO - 15/01/2026 =====
// Calculadora interativa: soma, subtração, multiplicação e divisão
// Com validação robusta de todos os inputs

while(true) {

    let operacao = prompt(
        "Escolha a operação:\n" +
        "+ (soma)\n" +
        "- (subtração)\n" +
        "* (multiplicação)\n" +
        "/ (divisão)\n" +
        "s (sair)"
    );

    // Verifica se usuário quer sair
    if (operacao === "s" || operacao === "S") {
        alert("Programa encerrado!");
        break;
    }

    // Remove espaços
    operacao = operacao.trim();

    // Valida se operação é válida
    if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
        alert("Operação inválida! Use +, -, * ou /");
        continue;
    }


    
    let x = prompt("Digite o primeiro número:");

    if (x === "s" || x === "S") {
        alert("Programa encerrado!");
        break;
    }

    x = x.trim();

    if (x === "") {
        alert("Preencha com algo válido!");
        continue;
    }

    if (isNaN(Number(x))) {
        alert("Você não digitou um número válido!");
        continue;
    }


  
    let y = prompt("Digite o segundo número:");

    if (y === "s" || y === "S") {
        alert("Programa encerrado!");
        break;
    }

    y = y.trim();

    if (y === "") {
        alert("Preencha com algo válido!");
        continue;
    }

    if (isNaN(Number(y))) {
        alert("Você não digitou um número válido!");
        continue;
    }


    // SWITCH 
    let resultado;
    let simbolo;

    // Converte strings para números
    const num1 = Number(x);
    const num2 = Number(y);

    // Switch: escolhe operação baseado no input
    switch(operacao) {
        case "+":
            resultado = num1 + num2;
            simbolo = "soma";
            break;
        
        case "-":
            resultado = num1 - num2;
            simbolo = "subtração";
            break;
        
        case "*":
            resultado = num1 * num2;
            simbolo = "multiplicação";
            break;
        
        case "/":
            // Valida divisão por zero
            if (num2 === 0) {
                alert("Erro: Divisão por zero não é permitida!");
                continue; // Volta pro início do loop
            }
            resultado = num1 / num2;
            simbolo = "divisão";
            break;
    }


    // ===== EXIBE RESULTADO =====
    alert(
        `Operação: ${simbolo}\n` +
        `${num1} ${operacao} ${num2} = ${resultado}`
    );

} // Volta pro início do loop


// ===== CONCEITOS PRATICADOS =====
//  Loop infinito (while true)
//  Switch case (múltiplas condições)
//  Break e continue
//  Validação de entrada vazia
//  Validação de tipo (isNaN)
//  Validação de divisão por zero
//  .trim() - remove espaços
//  Number() - conversão explícita
//  Operadores aritméticos (+, -, *, /)
//  Template string multilinha
