const http = require('http'); // http module nodejs

//import http from 'http'; // ES6

// fs, http,process, url, util, path, querystring, crypto, zlib, child_process, cluster, net, dgram, dns, tls, events, stream, timers, string_decoder, http2, https, os, vm, assert, tty, repl, module, v8, readline, console, domain, punycode, string_decoder, url, util, v8, vm, zlib

const hostname = '127.0.0.1';// localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});