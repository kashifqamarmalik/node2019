'use strict';

const connection = require('./db');

exports.getAll = async () => {
  try {
    const [results, fields] = await connection.query('SELECT * FROM zoo.animal');
    console.log(results); // results contains rows r
    console.log(fields); // fields contains extra m
    return results;
  } catch (e) {
    console.log(e);
    throw 'db error :(';
  }
};

exports.search = async (name) => {
  try {
    const [results] = await connection.query(
      'SELECT * FROM zoo.animal WHERE name LIKE ?',
      [name]);
    return results;
  } catch(e) {
    console.log(e);
    throw `db error`;
  }
};

exports.insert = async (name) => {
  try {
    const [result] = await connection.query(
      'INSERT INTO zoo.animal  (name) VALUES (?)',
      [name]
    );
    return result;
  } catch (e) {
    console.log(e);
    throw('db error');
  }

};