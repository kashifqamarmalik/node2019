'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node Server');
}); 

app.get('/demo', (req, res) => {
    res.send('demo');
});
app.listen(3000, () => {
    console.log('server app start?');
});


