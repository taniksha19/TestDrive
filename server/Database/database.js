const mysql = require('mysql');

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "Chinmaypb@1032",
    database : "testdrivedb",
    multipleStatements: true,
    dateStrings: true
});

module.exports = db;