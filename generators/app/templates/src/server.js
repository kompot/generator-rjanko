import http from 'http';

const rjankoExpress = require('rjanko/src/core/server');
const SocketIoServer = require('rjanko/src/core/SocketIoServer');
const debug = require('rjanko/src/core/logging/debug')(__filename);

const port = process.env.PORT || 3000;
const server = http.Server(rjankoExpress);

new SocketIoServer(server);

server.listen(port, (err, result) => {
  if (err) {
    debug(err, result);
  }
  debug(`Express server listening on ${port}`);
});

