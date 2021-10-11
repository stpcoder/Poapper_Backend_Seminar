//set protocol
const http = require('http');

//make server
const server = http.createServer((request, response) => {
  const urlList = request.url.split('/');
  const operator = urlList[1] ? urlList[1] : null;
  const num1 = urlList[2] ? Number(urlList[2]) : null;
  const num2 = urlList[3] ? Number(urlList[3]) : null;

  response.write('<h1>calculation page</h1>');
  switch(operator) {
    case 'add': 
      response.write(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
      break;
    case 'sub':
      response.write(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
      break;
    case 'mul':
      response.write(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
      break;
    case 'div':
      response.write(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
      break;
  }
  response.end();
});

//set port
server.listen(8080);

//event listener
server.on('listening', () => {
  console.log('operation is end');
});