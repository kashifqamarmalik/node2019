'use strict';
require('dotenv').config()
const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
database: process.env.DB_NAME

});


const app = express();

app.use(express.static('public'))

app.get('/test', (req, res) => {
    connection.query(
        'SELECT * FROM test.countries',
        (err, results, fields) => {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.json(results);
        }
      );
}); 

app.get('/demo', (req, res) => {
    res.send('request', req);
    res.send('demo')
});
app.listen(3000, () => {
    console.log('server app start?');
});


