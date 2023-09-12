const db= require("../config");

class Cart {
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, productID, quantity 
        FROM cart
        `;
        db.query(query, (err, results) => {
            if (err) throw (err);
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    fetchCart(req, res) {
        const query = `
        SELECT productName, price, prodImg1
        FROM users
        INNER JOIN cart ON users.userID = cart.userID
        INNER JOIN products ON cart.productID = products.productID
        WHERE cart.userID = users.userID
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    insertCart(req, res) {
        const query = `
        INSERT INTO cart SET ?
        `;
        db.query(query, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: "Product has been added to cart!",
            })
        })
    }

    updateCart(req, res) {
        const query = `
        UPDATE cart SET ?
        WHERE orderID = ?
        `;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw (err);
            res.json({
                status: res.statusCode,
                message: "Cart has been updated"
            })
        })
    }

    clearCart(req, res) {
        const query = `
        DELETE FROM cart 
        WHERE userID = ${req.params.id}
        `;
        db.query(query, (err) => {
            if (err) throw (err);
            res.json({
                status: res.statusCode,
                message: "Cart has been cleared"
            })
        })
    }

    deleteCart(req, res) {
        const query = `
        DELETE FROM cart
        WHERE productID = ${req.params.id}
        `;
        db.query(query, (err) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                message: "Product deleted from cart!"
            })
        })
    }
}

module.exports= Cart;