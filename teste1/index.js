const express = require ('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req,res) => {
    res.send('TESTE => docker, dockerfile, docker-compose e dockerignore');
});

app.listen(PORT,HOST);
console.log('docker OK http://localhost:3000/');