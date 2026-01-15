# 🎯 Exercícios de Reforço

Banco de exercícios para consolidar fundamentos através da prática variada.

## ⚙️ Como usar

- **Escolha 1-2 exercícios por sessão de estudo**
- **Crie arquivo separado** para cada (ex: `reforco-validador-cpf.js`)
- **Commita com tag** `[REFORÇO]` na mensagem
- **Revisa conceitos** que teve dificuldade

---

## 🔹 Validações (Reforça: loops, condicionais, strings)

### **Nível 1 - Iniciante**

**() Validador de Email Simples**
- Verificar se tem `@` e `.`
- Não pode começar/terminar com espaços
- Min 5 caracteres
- **Conceitos:** `.includes()`, `.trim()`, `.length`

**() Validador de Telefone BR**
- Formato: `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX`
- Remover caracteres especiais e validar tamanho
- **Conceitos:** `.replace()`, regex básico, `.length`

**() Validador de Senha**
- Mínimo 8 caracteres
- Pelo menos 1 letra e 1 número
- **Conceitos:** loops, `.charCodeAt()`, condicionais

### **Nível 2 - Intermediário**

**() Validador de CPF**
- Algoritmo de dígitos verificadores
- Remover formatação (pontos e traços)
- Rejeitar CPFs inválidos (111.111.111-11)
- **Conceitos:** loops complexos, cálculos, arrays

**() Validador de Data**
- Formato DD/MM/YYYY
- Verificar se data é válida (não aceitar 31/02/2026)
- **Conceitos:** `Date`, validação lógica, meses com 30/31 dias

---

## 🔁 Loops + Condicionais (Reforça: lógica de programação)

### **Nível 1 - Iniciante**

**() Tabuada Completa**
- Recebe número, gera tabuada de 1 a 10
- Exibe formatado: `7 x 3 = 21`
- **Conceitos:** loop `for`, template strings

**() Contador de Vogais**
- Recebe string, conta quantas vogais tem
- Ignora maiúsculas/minúsculas
- **Conceitos:** loop, `.toLowerCase()`, condicionais

**() Números Pares/Ímpares**
- Recebe range (ex: 1 a 50)
- Separa pares e ímpares em arrays diferentes
- **Conceitos:** loop, operador `%`, arrays

### **Nível 2 - Intermediário**

**() Números Primos**
- Listar todos os primos até N
- **Conceitos:** loop aninhado, lógica matemática

**() Sequência Fibonacci**
- Gerar primeiros 20 números
- **Conceitos:** loop, variáveis temporárias, lógica sequencial

**() Palíndromo**
- Verificar se palavra é igual de trás pra frente
- Ignorar espaços e pontuação
- **Conceitos:** loop reverso, strings, `.replace()`

---

## 🎛️ Funções (Reforça: modularização, escopo)

### **Nível 1 - Iniciante**

**() Calculadora Modular**
- 4 funções separadas: `somar()`, `subtrair()`, `multiplicar()`, `dividir()`
- Validação de divisão por zero
- **Conceitos:** funções puras, parâmetros, return

**() Conversor de Temperatura**
- `celsiusParaFahrenheit()` e `fahrenheitParaCelsius()`
- Retorna valor com 2 casas decimais
- **Conceitos:** funções, `.toFixed()`, fórmulas

**() Formatador de Moeda**
- Recebe número, retorna `R$ 1.234,56`
- **Conceitos:** funções, `.toLocaleString()` ou lógica manual

### **Nível 2 - Intermediário**

**() Gerador de Slug**
- Transforma "Meu Título Legal!" em "meu-titulo-legal"
- Remove acentos, espaços vira hífen
- **Conceitos:** funções, regex, `.normalize()`, strings

**() Contador de Palavras**
- Recebe texto, retorna objeto `{total: 10, unicas: 7}`
- **Conceitos:** funções, `.split()`, Set ou lógica manual

**() Calculadora de Juros Compostos**
- `calcularJuros(capital, taxa, tempo)`
- Retorna montante final e juros totais
- **Conceitos:** funções, `Math.pow()`, objetos de retorno

---

## 🎲 Projetos Mini (Reforça: tudo junto)

### **Nível 1 - Iniciante**

**() Pedra, Papel, Tesoura**
- Joga contra computador (escolha aleatória)
- Valida input do usuário
- Exibe placar
- **Conceitos:** condicionais, `Math.random()`, validações

**() Sistema de Notas**
- Recebe 3 notas, calcula média
- Classifica: Aprovado (≥7), Recuperação (5-7), Reprovado (<5)
- **Conceitos:** funções, condicionais, cálculos

### **Nível 2 - Intermediário**

**() Jogo de Adivinhação**
- Computador sorteia número (1-100)
- Usuário tem 7 tentativas
- Dá dicas: "maior" ou "menor"
- **Conceitos:** loop, condicionais, contador, `Math.random()`

**() Conversor de Unidades Completo**
- Temperatura, distância, peso
- Menu de opções com switch/case
- **Conceitos:** funções, switch, validações

---

## 📊 Como Progredir

**Regra:** Faz 3 exercícios Nível 1 antes de ir pro Nível 2

**Cada exercício deve:**
- ✅ Ter código comentado
- ✅ Validar todas as entradas
- ✅ Usar boas práticas (const/let, fail-fast)
- ✅ Ser commitado com mensagem descritiva

**Exemplo de commit:**
```bash
git commit -m "[REFORÇO] Validador de senha - loops + condicionais + charCodeAt"
