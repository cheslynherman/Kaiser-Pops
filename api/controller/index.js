const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();
// Import all models objects
const { users, products, cart } = require("../model");
const verifyToken = require("../middleware/authenticateUser")

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
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

// products router

routes.post("/product", bodyParser.json(), (req, res) => {
  products.createProduct(req, res);
});

routes.get("/products", (req, res) => {
  products.fetchProducts(req, res);
});

routes.get("/products/:id", (req, res) => {
  products.fetchProduct(req, res);
});

routes.patch("/products/:id", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});

routes.delete("/products/:id", (req, res) => {
  products.deleteProduct(req, res);
});

// cart routes

routes.get("/cart", (req, res) => {
  cart.fetchOrders(req,res);
})

routes.get("/user/:id/carts", (req, res) => {
  cart.fetchCart(req, res);
});

routes.post("/user/:id/cart", bodyParser.json(), (req, res) =>{
  cart.insertCart(req, res);
});

routes.patch("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
  cart.updateCart(req, res)
});

routes.delete("/user/:id/cart", (req, res) => {
  cart.clearCart(req, res)
})

routes.delete("/user/:id/cart/:id", (req, res) => {
  cart.deleteCart(req, res)
})

module.exports = {
  express,
  routes,
};
