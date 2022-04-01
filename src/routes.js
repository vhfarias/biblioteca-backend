let { Router } = require('express');
let booksDb = require('./database/Books');

let routes = new Router();

routes.get('/', (req, res) => {
  res.json({ status: 'ok' })
});

routes.post('/obras', async (req, res) => {
  booksDb.insert(req.body)
    .then(v => {
      res.statusCode = 200;
      res.end();
    })
    .catch(e => {
      res.statusCode = 400;
      res.json({ error: e.message });
    })
})

module.exports = routes;