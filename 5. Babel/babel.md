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