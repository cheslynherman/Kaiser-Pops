const Users = require("./users");
const Products= require("./products");
// export all objects
module.exports = {
    users: new Users(),
    products: new Products()
};