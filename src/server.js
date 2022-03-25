let express = require('express');
let app = express();
let routes = require('./routes');
let BooksDb = require('./database/Books');

const PORT = 8000;

app.use(express.json());
app.use(routes);

BooksDb.build();

app.listen(PORT, () => console.log(`Sistema de Gerenciamento de Biblioteca iniciado na porta ${PORT}`));