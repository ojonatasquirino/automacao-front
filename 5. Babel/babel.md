

# Babel
<blockquote> Babel é uma ferramenta de transpilação de código JavaScript. Ele permite que você escreva código usando as últimas funcionalidades do JavaScript (como sintaxe de versões mais recentes do ECMAScript) e o converta para uma versão mais antiga suportada pelos navegadores atuais.

Para maiores informações sobre sua documentação e funcionailidades acesse <a href='https://babeljs.io/docs/' >babeljs.io</a>.
</blockquote>

 ## Por que usar Babel em seus projetos?

 1. **Compatibilidade com Navegadores Antigos**: Permite que você use as últimas funcionalidades do JavaScript, mesmo em navegadores mais antigos que não suportam esses recursos.

 2. **Melhor Legibilidade do Código:** Permite que você escreva código mais limpo e legível, utilizando as sintaxes mais recentes e melhores práticas do JavaScript.

 3. **Ecosistema de Ferramentas Modernas:** Integrado facilmente com outras ferramentas modernas de desenvolvimento, como Webpack, ESLint e TypeScript.
 

## ES2015 e mais 

Babel tem suporte para a versão mais recente do JavaScript através de transformadores de sintaxe.

Esses plugins permitem que você use uma nova sintaxe, agora mesmo sem esperar pelo suporte do navegador. Confira nosso guia de uso para começar.

## Instalação do Babel

Você pode instalar o Babel em seu projeto usando o npm (Node Package Manager), seguindo estes passos:

1. **Instalação local**

```bash
npm install @babel/core @babel/cli --save-dev
```

Isso instalará o Babel Core e a CLI do Babel como dependências de desenvolvimento do projeto.

2. **Instalação de plugins e presets**

Você também precisará instalar plugins e/ou presets específicos para transpilar seu código JavaScript. Por exemplo, para converter código ES6+ para ES5, você pode instalar o preset @babel/preset-env:

```bash
npm install @babel/preset-env --save-dev
```
## Configuração do Babel
Após a instalação, você precisará configurar o Babel em seu projeto. Isso geralmente é feito através de um arquivo chamado .babelrc na raiz do seu projeto. Aqui está um exemplo de configuração básica no arquivo JSON:

```bash
{
  "presets": ["@babel/preset-env"]
}
```

Esta configuração indica ao Babel para usar o preset @babel/preset-env ao transpilar seu código.

## Utilizando o Babel


Agora que o Babel está instalado e configurado em seu projeto, você pode usá-lo para transpilar seu código JavaScript. Aqui está um exemplo de como você pode transpilar um arquivo src/index.js para um arquivo dist/index.js usando a CLI do Babel:


```bash
{
npx babel src --out-dir dist
}
```

Isso irá transpilar todos os arquivos .js dentro do diretório src e salvar os arquivos transpilados no diretório dist.

## Exemplos Práticos no Desenvolvimento de Software:

### 1. Convertendo ES6+ para ES5:

Permite que você use as últimas funcionalidades do JavaScript (como arrow functions, classes, destructuring, etc.) e as converta para uma versão mais antiga suportada pelos navegadores mais antigos.

### 2. Uso de Módulos:

Permite que você use a sintaxe de módulos do ES6 (import/export) e a converta para um formato compatível com os navegadores atuais.

### 3. Utilizando Sintaxe de Async/Await:

Permite que você escreva código assíncrono de forma mais limpa e legível usando as palavras-chave async/await e as converta para uma versão que funcione em navegadores mais antigos.

## Exemplificação prática

Acesse o **<a href='/5. Babel/babel.js'> arquivo JS </a>** e veja alguns exemplos de código JavaScript usando recursos modernos do ES6+ e mostrar como eles são transformados pelo Babel após o processo de compilação. 