import moment from 'moment';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

//set protocol
const http = require('http');

//make server
const server = http.createServer((request, response) => {
  const currDateString = moment().format('YYYY-MM-DD');
  const currTimeString = moment().format('hh:mm:ss');
  const outputTimeString = currDateString +' '+ currTimeString;
  
  response.write('<h1>timer page</h1>');
  response.write(outputTimeString);
  response.end();
});

//set port
server.listen(8080);

//event listener
server.on('listening', () => {
  console.log('time is printed');
});