const { clients } = require("../models/clients");
const { connection } = require("../database/connection");

function getAllUser(req, res) {
    const sql = "select * FROM users;";
    connection.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
}

function getUserById(req, res) {
    const { id } = req.params;
    const client  = clients.find((value) => value.id === Number(id));
    if(!client) return res.send('Error 404: Client not found');
    res.send(client);
};

function createNewUser(req, res) {
    const { name } = req.body;
    const { age } = req.body;
    const { email } = req.body;
    const { fone } = req.body;
    const id = clients.length + 1;
    clients.push({id, name, age, email, fone});
    res.send('Client added')
};

function updateUser (req, res) {
    const { id } = req.params;
    const   {name, age, email, fone}  = req.body;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send('Client not found');
    client.name = name;
    client.age = age;
    client.email = email;
    client.fone = fone;
    res.send('Client updated');
};

function deleteUser (req, res) {
    const { id } = req.params;
    const index = clients.findIndex((value) => value.id === Number(id));
    if(index === -1) return res.send('Client not found');
    clients.splice(index, 1);
    res.send('Client deleted')
};

module.exports = {
    getAllUser,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
};