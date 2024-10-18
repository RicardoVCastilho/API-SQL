const mysql = require("mysql2");

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "123456",
    database: "clients",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
    console.log('Connected to the database');
});

module.exports = { connection };