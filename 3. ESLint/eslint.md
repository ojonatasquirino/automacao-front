# ESLint

<blockquote>
O ESLint é uma ferramenta de linting (ato de executar um linter em código para detectar erros) que analisa estaticamente o seu código para encontrar problemas rapidamente. 
<br><br>
Ele é integrado à maioria dos editores de texto e você pode executar o ESLint como parte de seu pipeline de integração contínua.Além disso ele padroniza e mantém consistência entre diferentes códigos JavaScript para garantir a consistência e a qualidade no processo de desenvolvimento. 
<br><br>
Acesse o site oficial <strong> <a href='https://eslint.org/'>eslint.org </a> </strong> para mais detalhamento de como utilizá-lo nos seus projetos. 
</blockquote>

## Instalação

Para instalar o ESLint em um projeto NodeJS, basta executar o seguinte comando no terminal:

Instalação global:
```bash
$ npm install eslint -g
```

```bash
$ npm init
```

```bash
$ eslint --init
```

Isso instalará o ESLint como uma dependência de desenvolvimento no projeto.

## Motivos para usar o ESLint

#### 1. Padronização do Código:

 O ESLint permite definir e aplicar um conjunto de regras de codificação para garantir que todo o código JavaScript no projeto siga um estilo consistente e padronizado.

#### 2. Identificação de Erros e Problemas

 O ESLint ajuda a identificar potenciais erros e problemas no código, como variáveis não utilizadas, referências indefinidas, uso de funções não seguras, entre outros, antes mesmo de executar o código.
#### 3. Melhoria da Legibilidade
 Ao seguir as regras de linting, o código tende a se tornar mais legível e compreensível, facilitando a manutenção e colaboração entre os membros da equipe do desenvolvimento.
#### 4. Prevenção de Problemas Futuros
 O ESLint ajuda a prevenir problemas comuns e erros de codificação antes que eles se tornem um problema sério, economizando tempo e esforço no processo de desenvolvimento.

## Exemplos práticos do ESLint

#### 1. Indentificação de variáveis não utilizadas

```bash
function exemplo() {
    const variavelNaoUtilizada = "Olá";
    console.log("Função de exemplo executada.");
}
```
<blockquote>
Se você configurar o ESLint para identificar variáveis não utilizadas, ele gerará um aviso apontando para a variável <code>variavelNaoUtilizada</code>.
</blockquote>


#### 2. Garantia de Ponto e Vírgula

Suponha que você configure o ESLint para exigir ponto e vírgula no final de cada instrução. Se você escrever o seguinte código sem ponto e vírgula:

```bash
const mensagem = "Olá"
console.log(mensagem)
}
```
O ESLint emitirá um aviso indicando que espera um ponto e vírgula após a primeira linha.

#### 3. Padronização de Aspas
Se você configurar o ESLint para exigir aspas simples em todo o código, mas escrever o seguinte código com aspas duplas:

```bash
const mensagem = "Olá";
console.log("Mensagem: " + mensagem);
```

#### 4. Verificação de Espaçamento e Indentação

Se você configurar o ESLint para verificar o espaçamento e a indentação do código, ele pode identificar problemas como este:

```bash
function exemplo(){
console.log("Indentação incorreta.");
}
```

O ESLint pode gerar um aviso indicando que a função não está devidamente indentada. Em todos esses exemplos, o ESLint identificaria os problemas durante o desenvolvimento e forneceria avisos ou erros diretamente no editor de código, ajudando você a corrigi-los antes mesmo de executar o código. Essa abordagem permite detectar e corrigir problemas de forma proativa, mantendo um código limpo, consistente e livre de erros.

## Extensões VSCode X ESLint

Apesar do ESLint ser uma ferramenta poderosa para padronização na codificação e correção de erros, o  <a href='https://code.visualstudio.com/'> VSCode</a> oferece extensões que incorporam funcionalidades semelhantes ao ESLint e até melhores, tornando-as uma opção conveniente para a detecção e correção de problemas no código JavaScript.

#### 1. ESLint Extension
 O VSCode oferece uma extensão oficial do ESLint, que integra diretamente o ESLint ao editor. Esta extensão executa o ESLint em tempo real enquanto você escreve código, destacando problemas e fornecendo sugestões de correção diretamente na interface do VS Code. Isso permite uma experiência de desenvolvimento fluida e eficiente, onde você pode corrigir problemas imediatamente enquanto escreve o código.

#### 2. Extensões de Linting
 Além do ESLint, o VSCode suporta várias outras extensões de linting para JavaScript, como **JSHint**, **JSLint**, **StandardJS** e muitas outras. 
 
 Essas extensões oferecem funcionalidades semelhantes de detecção e correção de problemas no código JavaScript, permitindo que você escolha a ferramenta que melhor se adapta às suas necessidades e preferências.

 #### 3. Prettier 
 O Prettier é uma ferramenta de formatação de código que pode ser integrada ao VS Code através da extensão "Prettier - Code formatter".

Além de corrigir problemas de formatação, o Prettier também pode ser configurado para lidar com linting em alguns casos. Ele automatiza a formatação do código, garantindo consistência e estilo em todo o projeto, o que pode ser útil em equipes de desenvolvimento.

 #### 4. ESLint + Prettier 

 Esta extensão combina as funcionalidades do ESLint com as do Prettier, proporcionando linting e formatação de código em uma única extensão.
Com essa extensão, você pode usar o ESLint para detectar problemas de código e o Prettier para formatar o código automaticamente de acordo com as regras definidas.

 #### 5. JavaScript (ES6) snippets 

 Esta extensão fornece uma coleção de snippets de código JavaScript para ajudar na produtividade durante o desenvolvimento.
Os snippets incluem atalhos para padrões comuns de código JavaScript, como estruturas de controle, declarações de função, manipulação de arrays e objetos, etc.
Isso pode acelerar o processo de escrita de código, fornecendo modelos pré-definidos para padrões comuns.

#
Embora estas extensões não substituam completamente o ESLint em termos de linting de código JavaScript, elas oferecem funcionalidades adicionais que podem melhorar a experiência de desenvolvimento no VS Code, ajudando a manter o código limpo, consistente e formatado de forma adequada. Dependendo das suas necessidades específicas, você pode optar por usar uma ou mais dessas extensões em conjunto com o ESLint para obter o máximo de produtividade e qualidade de código.
