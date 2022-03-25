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
  let db = await openDb();
  let buildQuery = `CREATE TABLE IF NOT EXISTS Books(
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    autor TEXT NOT NULL,
    editora TEXT NOT NULL,
    foto TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    )`;
  await db.run(buildQuery);
  await db.close();
}



module.exports = {
  openDb,
  build
}