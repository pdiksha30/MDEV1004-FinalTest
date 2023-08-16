#!/usr/bin/env node
/*
Filename : server.ts, 
Student’s Name : Diksha Patel,
StudentID : 200540067, 
Date : 6/23/23 
*/
import app from './Server/Config/app';
import debug from 'debug';
debug('apitsc:server');
import http from 'http';
import { AddressInfo } from 'net';
import { HttpError } from 'http-errors';


let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

let server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val:string) : string | number | false 
{
  let port = parseInt(val, 10);

  if (isNaN(port)) 
  {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: HttpError) : void
{
  if (error.syscall !== 'listen') 
  {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) 
  {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() : void
{
  let addr = server.address() as AddressInfo;
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
