# School-Management-Frontend

<p align="center">
  <img alt="logo" src="https://github.com/paulojr-eco/COM222-Backend/blob/main/.github/logo.png?raw=true" width="25%">
</p>

<p align="center">
  <a href="#star-features">Features</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#keyboard-tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#computer_mouse-instalação">Instalação</a>
</p>


# :star: Features

Esta é uma página Web para um aplicativo de gerenciamento escolar.
Você pode visualizar e gerenciar os dados de alunos e funcionários de uma escola.

Algumas funcionalidades da aplicação são:
  - Cadastro de alunos e funcionários;
  - Modificação dos dados de alunos e funcionários;
  - Remoção de alunos e funcionários;
  - Busca de alunos e funcionários

O aplicativo é construído utilizando o framework React.JS com Next.JS. Toda estilização é feita através do framework Tailwind CSS.

<p> A página pode ser visualizada em qualquer navegador. </p>

<p align="center">
  O repositório de backend pode ser acessado em: <a href="https://github.com/paulojr-eco/COM222-Backend">Backend</a>
</p>

<br/>

# :keyboard: Tecnologias

As tecnologias utilizadas no projeto foram:

- [x] React.JS
- [x] Next.JS
- [x] Tailwind CSS
- [x] HTML
- [x] CSS
- [x] Typescript    

<br/>

# :computer_mouse: Instalação

Para usar este projeto, primeiro você precisa de Node.JS (é importante utilizar pelo menos a versão LTS => 18.16), React.JS, e Next.JS instalados:

```bash
# Clonar o repositório
git clone https://github.com/paulojr-eco/COM222-Frontend.git

# Acessar o diretório
cd COM222-Frontend

# Instalar dependências
npm install

# Iniciar a aplicação 
npm run dev
```
# :round_pushpin: Rotas
- /login: Página para realização de Sign In/Sign Up
- /reset-password: Página com campo de inserção de e-mail para envio de e-mail de recuperação
- /reset-password/confirmation: Página de confirmação do envio de recuperação
- /reset-password/[token]: Rota para a página de redefinição de senha
- /home: Página Inicial (contem o Cronograma como exemplo)
- /employees: Rota para a página de visualização dos funcionários
- /employees/create: Página para criação de funcionário
- /employees/[id]: Interface de edição de um funcionário
- /students: Rota para a página de visualização dos alunos
- /students/create: Página para criação de aluno
- /students/[id]: Interface de edição de um aluno
- /profile: Rota para a página de edição do perfil do usuário
