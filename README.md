<div align="center">
    <img src="https://res.cloudinary.com/dzy81lxxj/image/upload/v1615170614/SVG_for_client_projects_2016_2_wby848.jpg" width="300px"/>
</div>

<br />

<h2 align="center">
   MiniProjeto 1.0v
</h2>

<p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/FMKani/Mini-Projeto-SVG?">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/FMKani/Mini-Projeto-SVG?">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/FMKani/Mini-Projeto-SVG?">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/FMKani/Mini-Projeto-SVG?">
</p> 

<p align="center">
  <a href="#computer-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-desenvolvido-com">Desenvolvido com</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-contato">contato</a>
 </p>


## :computer: Projeto 

 Miniprojeto aplicado na disciplina de Banco de dados 2. Basicamente consite em pegar dados espaciais de cidades e criar um desenho da forma da região, através da API criada pelo professor Paulo.

## :rocket: Desenvolvido com

Esse projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [Postgres](https://www.postgresql.org/)
-   [SVG](https://www.w3schools.com/graphics/svg_intro.asp)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)
-   [API-SVG](https://github.com/Banco-II-2020-1/API-SVG)

</details>

<details>
  <summary>Frontend</summary>

-   [fetch](https://javascript.info/fetch)
-   [JavaScript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>


## :information_source: Como executar

### Requirements

Para rodar a aplicação será necessário:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Npm](https://www.npmjs.com/package/npm) 
* [PgAdmin4](https://hub.docker.com/r/dpage/pgadmin4/) 
* [Postgis](https://hub.docker.com/r/mdillon/postgis)

P.S1: Eu recomendo utilizar o [Docker](https://www.docker.com/) para rodar o banco de dados.
<br>

```
### Backend (API-SVG)
Primeiramente clone o repsitório e instale as dependências.
```bash
# Para clonar o repositório
$ git clone https://github.com/FMKani/Mini-Projeto-SVG.git

# Va para o arquivo da API
$ cd API-SVG

# Instale as dependências do backend
$ npm i

# Em seguida execute 
$ npm start

# O próximo passo é abrir o documento index.html no seu savegador, e por fim adicionar a cidade que deseja pesquisar 

```
P.S2: Diferentemente do BD do professor, a minha tabela não se chama "municipio", mas sim "municipios". E o campo "nome", preserva a sigla "nm_mun" 

P.S3: Não esqueça de rodar as imagens do docker 

P.S4: Para conectar com o banco de dados, você precisará entrar com algumas informações de acesso que devem ser colocadas em um arquivo .env.


## Arquivo .env:

DB_USER={usuário do postgres}
<br>
DB_PASSWORD={senha do postgres} 
<br>
DB_HOST={host do postgis no docker}
<br>
DB_PORT={porta do postgis no docker} 
<br>
DB_DATABASE={nome do banco - case sensitive}
<br>
PORT={porta que a API irá utilizar}


## :mailbox_with_mail: Contato!


<a href="https://www.linkedin.com/in/wanielton-ferreira" target="_blank" >
  <img alt="Linkedin - Wanielton Ferreira" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:wanieltonferreira@gmail.com" target="_blank" >
  <img alt="Email - Wanielton Ferreira" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Wanielton Ferreira.
