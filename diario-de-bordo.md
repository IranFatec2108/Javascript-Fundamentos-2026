# 📔 Diário de Bordo

## 30/12/2025 - Dia 1: Introdução ao Canvas

Primeiro contato com HTML5 Canvas criando elementos estáticos do ping pong.

**Aprendi:**
- `getContext('2d')` para desenhar
- `fillRect()` para criar retângulos
- Posicionamento de elementos no canvas

**Arquivo:** `02-projetos/ping-pong/v1-canvas-estatico.html`

---

## 03/01/2026 - Dia 2: Operadores Lógicos

Pratiquei condicionais com operadores AND e OR.

**Aprendi:**
- Operadores `&&` (AND) e `||` (OR)
- Condicionais simples

**Arquivo:** `01-fundamentos/condicionais.js` (exercício 1)

---

## 05/01/2026 - Dia 3: Funções + Ping Pong Jogável

**Manhã:** Criei primeira função JavaScript (soma).

**Tarde:** Transformei o canvas estático em jogo jogável!

**Aprendi:**
- `setInterval()` para animação
- Detecção de colisão
- Sistema de pontuação
- Controle com mouse (`addEventListener`)

**Arquivos:**
- `01-fundamentos/funcoes-basicas.js`
- `01-fundamentos/condicionais.js` (exercício 2 - velocidade carro)
- `02-projetos/ping-pong/v2-jogo-completo.html`

---

## 06/01/2026 - Dia 4: Refatoração de Código

Aprendi a organizar código em funções separadas.

**Antes:** Tudo numa função gigante  
**Depois:** Separei em `iniciar()`, `desenhar()`, `calcular()`, `resetBola()`

**Aprendi:**
- Separação de responsabilidades
- Código mais legível
- Funções reutilizáveis

**Arquivo:** `02-projetos/ping-pong/v3-codigo-refatorado.html`

---

## 14/01/2026 - Dia 5: Organização do Portfolio

Criei repositório no GitHub para documentar jornada de aprendizado.

Organizei todo código das últimas 2 semanas em estrutura profissional.

**Conquista:** Primeiro commit público!

---

## 15/01/2026 - Dia 6: Validações Robustas e Matemática

Estudei validação de entrada em múltiplas camadas e funções matemáticas.

**Aprendi:**

**Validações:**
- Loop infinito com `while(true)`
- `break` (sai do loop) e `continue` (pula iteração)
- `.trim()` para remover espaços
- `isNaN()` para validar números
- Validação de divisão por zero
- Switch/case para múltiplas condições

**Matemática:**
- `Math.log()` - logaritmo natural
- Loop com incremento customizado

**Validações avançadas:**
- `.length` para validar tamanho de string
- `new Date().getFullYear()` para pegar ano atual
- Validação de range (mínimo/máximo)

**Multilinguagem:**
- `.toLowerCase()` para normalizar entrada
- Condicionais complexas com múltiplos `&&` e `||`

**Arquivos criados:**
1. `validacao-entrada-usuario.js` - Calculadora simples com validação
2. `calculadora-completa-validada.js` - 4 operações + validações robustas
3. `loop-logaritmo-natural.js` - Loop customizado + Math.log()
4. `validacao-idade-completa.js` - Validação em camadas (tamanho, tipo, range)
5. `saudacao-multilinguagem.js` - Sistema com idioma/variação/dialeto

**Reflexão:** Código de saudação foi escrito no início (dez/2025) com `var`. Hoje refatoraria com `const/let`, guard clauses e validação fail-fast. Mantive original para documentar evolução.

## 19/01/2026 - Dia 7: Estrutura do Repositório

**Organizei:** Criação da pasta `03-exercicios-reforco/` para treino intensivo.

**Estrutura final:**
- `01-fundamentos/` - Conceitos das aulas
- `02-projetos/` - Aplicações reais
- `03-exercicios-reforco/` - Academia de código (treino diário)

**Conquista:** Repositório profissionalmente estruturado com 3 níveis de aprendizado!

---


## 21/01/2026 - Dia 8: **DOMINAÇÃO DE FUNÇÕES** 

**Consolidei escopo, funções aninhadas e shadowing em sessão intensiva de 2h.**

**Aprendi:**
- **Funções aninhadas** (`f1()` e `f2()` só existem dentro da `principal()`)
- **Escopo local vs global** (variáveis locais não afetam globais)
- **Shadowing** (`var x` dentro função cria nova variável independente)
- **Sem `var`** modifica variável global
- Diferença **função** vs **método** (método = função dentro objeto)

**Prática hands-on:**
```
✅ funcoes-basicas.js (soma, multiplica)
✅ Funções aninhadas (principal → f1, f2)
✅ Shadowing global/local (mesmo nome, escopos diferentes)
✅ Escopo aninhado (filhas só chamáveis pela mãe)
```

**Conceitos consolidados:**

- Function expressions (`var func = function(){}`)
- Parâmetros/return
- Escopo local/global/parent
- Shadowing com `var`


**Reflexão:** De "primeira função soma" (05/01) para "escopo aninhado e shadowing" em 16 dias. Evolução exponencial!   



## 21/01/2026 - Dia 8: **FUNÇÕES DE 1ª CLASSE** 

**Sessão noturna (19:00-23:00): Functions avançadas maSTRADAS!**

**Aprendi:**
- **Funções como parâmetros** (`operacao` aceita QUALQUER função)
- **Calculadora flexível** (1 função faz TODAS operações)
- **Substituição dinâmica** (`operacao` vira `somaa`, `sub`, etc)
- Conceito **"funções de 1ª classe"** (podem ser passadas/retornadas/armazenadas)

**Código chave:**
- calculadora(x, y, operacao) → operacao(x, y)
- somaa → [somaa]
- sub → [sub]
- multi → [multi]



**Prática hands-on:**
✅ 4 funções operações (somaa, sub, multi, div)
✅ Calculadora universal (aceita qualquer operação)
✅ Funções como "espaço substituível" (conceito DOMINADO)

text

**Conceitos consolidados:**
- Function expressions (100%)

- Parâmetros/return (100%)

- Escopo/shadowing (100%)

- FUNÇÕES COMO PARÂMETROS (100%) ← HOJE!


**Reflexão:** De `soma(x,y)` simples para `calculadora(x,y,QUALQUER_FUNÇÃO)` em 1 sessão!  
**Evolução:** Funções agora são **"peças de lego"** que encaixo onde quero.
**Atenção:** Preciso dar inicio aos meus exercicios com urgência, para melhorar minha pratica de escrita e análise de código
**Tempo:** 19:00-23:00 (4h foco total)  
**Status:** **Functions COMPLETAMENTE DOMINADAS** ✅✅✅  
**Próximo:** Arrays (`.map()` usa esse conceito!)