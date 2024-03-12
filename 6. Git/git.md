# Git 
<blockquote> O Git é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software. Ele permite que você acompanhe as alterações feitas em arquivos ao longo do tempo, facilitando o gerenciamento do código-fonte de um projeto. Se surgirem dúvidas, consulte a documentação oficial do Git e do GitHub para obter mais informações: <a href='https://git-scm.com/doc'>Git Documentation </a> e <a href='https://docs.github.com/en'> GitHub Help</a>.
</blockquote>

## Por que usar o Git em seus projetos?

### 1. Controle de Versão: 

O Git permite acompanhar todas as alterações feitas nos arquivos do seu projeto ao longo do tempo, facilitando a reversão para versões anteriores se necessário.

### 2. Colaboração:

Ele possibilita a colaboração entre membros da equipe, permitindo que vários desenvolvedores trabalhem no mesmo projeto simultaneamente e mesclando suas alterações de forma eficiente.

### 3. Rastreamento de Alterações:

Fornece um histórico detalhado de todas as alterações feitas nos arquivos, incluindo quem fez cada alteração e quando, o que facilita a identificação de problemas e o rastreamento de bugs.

## Instalação

### Windows:
1. Baixe o instalador do Git no site oficial: <a href='https://gitforwindows.org/'>Git for Windows</a>.
2. Execute o instalador e siga as instruções na tela para concluir a instalação.

### MacOS:
- Git geralmente é pré-instalado no MacOS. Se não estiver instalado, você pode instalá-lo usando o Homebrew:

```bash
brew install git
```

### Linux:

```bash
sudo apt update
sudo apt install git
```

### Principais Comandos do Git:

- <code>git init</code>: Inicializa um repositório Git em um diretório.

```bash
git init
```

- <code>git clone</code>: Clona um repositório Git existente para o seu computador.

```bash
git clone https://github.com/usuario/nome-do-repositorio.git
```

- <code>git add</code>: Adiciona arquivos ao stage, pronto para serem commitados.

```bash
git add arquivo.txt
```

- <code>git commit</code>: Registra as alterações no repositório.

```bash
git commit -m "Adicionado arquivo.txt"
```

- <code>git push</code>: Envia os commits locais para um repositório remoto.

```bash
git push origin master
```

- <code>git pull</code>: Obtém as alterações de um repositório remoto e mescla com o repositório local.

```bash
git pull origin master
```

- <code>git branch</code>:Lista, cria ou exclui branches no repositório.

```bash
git branch                      # Lista branches
git branch nome-do-branch       # Cria um novo branch
git branch -d nome-do-branch    # Exclui um branch
```

- <code>git checkout</code> : Altera o branch atual ou restaura arquivos do stage.


```bash
git checkout nome-do-branch     # Muda para o branch especificado
git checkout -- arquivo.txt     # Restaura um arquivo do stage
```


- <code>git merge</code>: Mescla as alterações de um branch para outro.

```bash
git checkout master             # Muda para o branch de destino
git merge nome-do-branch        # Mescla as alterações do branch especificado
```

Esses são apenas alguns exemplos dos principais comandos do Git. Eles formam a base para gerenciar efetivamente o controle de versão em seus projetos. Certifique-se de consultar a documentação oficial do Git para obter mais informações sobre cada comando.


## Integração ao Github 

### 1. Crie uma conta no Github: 
- Vá para o GitHub e crie um novo repositório.
- Copie a URL do repositório.

### 2. Clone o Repositório

```bash
git clone <link-do-repositorio>
```

### 3. Faça Alterações e Commite:
- Faça as alterações em seus arquivos.
- Adicione os arquivos ao stage: git add .
- Faça o commit das alterações: git commit -m "Descrição do commit".

### 4.  Envie as Alterações para o GitHub:
```bash
git push origin master
```

### 5. Sincronize Alterações:
```bash
git pull origin master
```

## 2ª Forma de Integração (a mais fácil)

### 1. Crie um repositório no Github

- Vá para o GitHub e crie um novo repositório.

## 2. No terminal (bash):
Coloque esses comandos no terminal:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <link-do-repositorio>
git push -u origin main
```
