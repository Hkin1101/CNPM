const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.HOST || 'localhost',
    user: process.env.user || 'root',
    password: process.env.passwd || 'password',
    database: 'ssps_database',
    dateStrings: ['DATETIME']
});

module.exports = db.promise();