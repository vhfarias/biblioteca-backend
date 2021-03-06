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

routes.delete('/obras/:id', async (req, res) => {
  let { id } = req.params;
  booksDb.remove(id)
    .then(resolve => {
      res.statusCode = 200;
      if (resolve.changes > 0)
        res.json({ 'status': 'success' });
      else {
        res.json({ 'status': 'id not found' })
      }
    })
    .catch(e => {
      res.statusCode = 400;
      res.json({ 'error': e.message })
    })
})

routes.get('/obras/:id', async (req, res) => {
  let { id } = req.params;
  booksDb.selectById(id)
    .then(resolve => {
      res.json(resolve);
    })
    .catch(e => {
      res.statusCode = 400;
      res.json({ 'error': e.message });
    })
})

routes.get('/obras', async (req, res) => {
  booksDb.selectAll()
    .then(resolve => {
      res.json(resolve);
    })
    .catch(e => {
      res.statusCode = 400;
      res.json({ 'error': e.message });
    })
})

routes.put('/obras/:id', async (req, res) => {
  let { id } = req.params;
  booksDb.update(id, req.body)
    .then(resolve => {
      return booksDb.selectById(id)
      //res.json({ 'status': 'success' })
    })
    .then(resolve => {
      res.json(resolve);
    })
    .catch(e => {
      res.statusCode = 400;
      res.json({ 'error': e.message });
    })
})

module.exports = routes;