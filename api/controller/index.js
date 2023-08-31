const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// Import all models objects
const {users, products} = require("../model");

// users router
routes.get("/users", (req, res) => {
    users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) =>{
    users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
    users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
    users.login(req, res);
});

// products router