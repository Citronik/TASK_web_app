const mysql = require('mysql2')
var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

connection.connect(function(err){
    if (err) {
        console.log(err.message);
        throw err;
    }
    else {
        console.log('DB connected');
    }
})

module.exports = connection;