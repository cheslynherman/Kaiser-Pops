const Users = require("./users");
const Products= require("./products");
const Cart = require("./cart");
// export all objects
module.exports = {
    users: new Users(),
    products: new Products(),
    cart: new Cart()
};