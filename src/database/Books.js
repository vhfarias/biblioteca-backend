const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

// you would have to import / invoke this in another file
const openDb = async () => {
  return open({
    filename: './src/database/books.sqlite',
    driver: sqlite3.Database
  })
}

const build = async () => {
  let buildQuery = `CREATE TABLE IF NOT EXISTS Books(
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    autor TEXT NOT NULL,
    editora TEXT NOT NULL,
    foto TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    )`;
  let db = await openDb();
  await db.run(buildQuery);
  await db.close();
}

const insert = async (book) => {
  let insertQuery = `INSERT INTO Books(titulo, autor, editora, foto) VALUES (?, ?, ?, ?)`;
  let db = await openDb();
  return db.run(insertQuery, [book.titulo, book.autor, book.editora, book.foto])
}

const remove = async (id) => {
  let deleteQuery = `DELETE FROM Books WHERE id = ?`;
  let db = await openDb();
  return db.run(deleteQuery, [id]);
}

const selectById = async (id) => {
  let selectQuery = `SELECT * FROM Books WHERE id = ?`;
  let db = await openDb();
  return db.get(selectQuery, [id]);
}

const selectAll = async () => {
  let postQuery = `SELECT * FROM Books`;
  let db = await openDb();
  return db.all(postQuery);
}

const update = async (id, book) => {
  let updateQuery = `UPDATE Books SET titulo = ?, autor = ?, editora = ?, foto = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
  let oldBook = await selectById(id);
  //cria um objeto com todas as propriedades da tabela Books comparando as chaves do objeto parâmetro book e de oldBook
  let newBook = Object.keys(oldBook).reduce((obj, key) => {
    obj[key] = book.hasOwnProperty(key) ? book[key] : oldBook[key];
    return obj;
  }, {})
  let db = await openDb();
  return db.get(updateQuery, [newBook.titulo, newBook.autor, newBook.editora, newBook.foto, id])
}

module.exports = {
  openDb,
  build,
  insert,
  remove,
  selectById,
  selectAll,
  update
}