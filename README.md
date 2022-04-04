<div align="center">
  <img src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="Logo" width="200"><h2>Sistema de Gerenciamento de Biblioteca</h2>
  <p>Um desafio DevChallenge</p>
  <hr>
</div>

### :mag:Sobre 
Esta é uma API de um sistema de gerenciamento de uma biblioteca básico capaz de realizar as operações básicas (CRUD) em um banco de dados que contém informações de livros como título, autor e editora. A ideia do projeto vem do <a href="https://github.com/devchallenge-io/biblioteca-backend">desafio</a> proposto pela DevChallenge.

### :book:Rotas da aplicação


|Método|Rota|Descrição|
|---|---|---|
|POST|/obras|A rota recebe titulo, editora, foto, e autores dentro do corpo da requisição por meio de objeto no seguinte formato: { id: 1, titulo: 'Harry Potter', editora: 'Rocco',foto: 'https://i.imgur.com/UH3IPXw.jpg', autores: ["JK Rowling", "..."]};|
|GET| /obras | A rota retorna uma lista com todas as obras cadastradas.|
|GET| /obras/:id| A rota retorna a obra correspondente ao id presente nos parâmetros|
|PUT|/obras/:id |A rota atualiza as informações de titulo, editora, foto e autores da obra com o id presente nos parâmetros da rota. |
|DELETE|/obras/:id|A rota remove a obra com o id presente nos parâmetros da rota.|

### :robot:Tecnologias
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### :thumbsup:Créditos
<div><a href="https://github.com/Lorenalgm">Lorena</a> | <a href="https://www.devchallenge.com.br/">DevChallenge</a></div>
