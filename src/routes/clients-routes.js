const express = require("express");
const route = express.Router();
const Controller = require("../controllers/clients-controllers");

route.get("/clients", Controller.getAllUser);
route.get("/clients/:id", Controller.getUserById);
route.post("/clients", Controller.createNewUser);
route.put("/clients/:id", Controller.updateUser);
route.delete("/clients/:id", Controller.deleteUser);

module.exports =  route ;