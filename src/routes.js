let { Router } = require('express');

let routes = new Router();

routes.get('/', (req, res) => {
  res.json({ status: 'ok' })
});

module.exports = routes;