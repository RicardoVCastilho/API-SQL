const express = require('express');
const app = express();
const clientRoutes = require('./src/routes/clients-routes');
const { connection } = require('./src/database/connection');

const port = 3000;

// middlewares
app.use(express.json());
app.use("/api", clientRoutes);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
    console.log('Connected to the database');

    // Inicia o servidor após a conexão com o banco de dados
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});




