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
  /*   .catch(e => {
      console.error(e.message);
      Promise.reject(e);
    }); */
  //db.close();
}

module.exports = {
  openDb,
  build,
  insert
}