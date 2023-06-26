const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('recipe.db.json');
const middleWare = jsonServer.defaults();
const port = process.env.PORT||3005;
server.use(middleWare);
server.use(router);
server.listen(port);