const db = require("../config");
class Products {
  fetchProducts(req, res) {
    const query = `SELECT productID, productName, quantity, price, category, descr, prodImg1, prodImg2 FROM products`
    db.query(query, (err, data) => {
        if (err) throw err;
        res.json ({
            status: res.statusCode,
            results:data,
        });
    });
  }

  fetchProduct (req, res) {
    const query = `SELECT productID, productName, quantity, category, price, descr, prodImg1, prodImg2 FROM products WHERE productID = ${req.params.id}`
    db.query(query, (err, result) => {
        if (err) throw err;
        res.json({
            status: res.statusCode,
            result,
        });
    });
  }

  deleteProduct (req, res) {
    const query = `DELETE FROM products WHERE productID = ${req.params.id}`
    db.query(query, [req.params.id], (err) => {
        if (err) throw err;
        res.json ({
            status: res.statusCode,
            message: "Product was deleted successfully",
        });
    });
  }

  updateProduct(req, res) {
    const query = `
    UPDATE products SET ? WHERE productID = ${req.params.id}
    `
    db.query(query, [req.body, req.params.id], (err) => {
        if (err) throw err
        res.json({
            status: res.statusCode,
            message: "Product has been successfully updated"
        });
    });
  }

  createProduct(req, res) {
    const query = `
    INSERT INTO products SET ?
    `
    db.query(query, req.body, (err) =>{
        if(err) throw err
        res.json ({
            status: res.statusCode,
            message: "Product has been added successfully"
        })
    })
  }
}

module.exports = Products;