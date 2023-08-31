const db = require("../config");
const {hash, compare, hashSync} = require("bcryptjs");
const {createToken} = require("../middleware/authenticateUser");

class Users {
    fetchUsers (req, res) {
        const query = `
        SELECT userID, firstName, lastName, email, gender, age, city, userPassword, userImage, roles 
        FROM users
        `
        db,query(query, (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }

    fetchUser (req, res) {
        const query = `
        SELECT userID, userName, lastName, email, gender, age, city, userPassword, userImage, roles 
        FROM users 
        WHERE userID = ${req.params.id}
        `
        db.query(query, (req, result) =>{
            if (err) throw err
            res.json ({
                status: res.statusCode,
                result
            });
        });
    }

    async login(req, res) {
        const {email, userPassword} = req.body
        const query = `
        SELECT email, userPassword
        FROM users
        WHERE email = ?
        `
        db.query(query, [email], async (err, result) =>{
            if (err) throw err
            if(!result?.length) {
                res.json({
                    status: res.statusCode,
                    message: "Incorrect Email"
                })
            } else {
                await compare(userPassword, result[0].userPassword, (cerr, cresult) =>{
                    if (cerr) throw cerr
                    const token = createToken({
                        email,
                        userPassword
                    });
                    res.cookie("realUser", token, {
                        expires: new Date(Date.now() + 259200000),
                        httpOnly: true,
                    });
                    if(cresult) {
                        res.json ({
                            message: "Successfully logged in",
                            token,
                            cresult: cresult[0],
                        });
                    } else {
                        res.json ({
                            status: res.statusCode,
                            message: "Unsuccessful"
                        });
                    }
                });
            }
        });
    }

    async register (req, res) {
        const data = req.body
        data.userPassword = await hash(data.userPassword, 20);
        const user = {
            email: data.email,
            userPassword: data.userPassword
        };

        const query = 
        `
        INSERT INTO users SET ? 
        `
        db.query(query, [data], (err) => {
            if (err) throw err

            let token = createToken(user)
            res.cookie("CorrectUser", token, {
                expires: new Date(Date.now() + 259200000),
                httpOnly: true,
            });
            res.json ({
                status: res.statusCode,
                message: "Welcome new user"
            })
        })
    }

    deleteUser(req, res) {
        const query = `
        DELETE FROM users WHERE userID= ${req.params.id}
        `
        db.query(query, [req.params.id], (err) => {
            if (err) throw err
            res.json ({
                status: res.statusCode,
                message: "User has been deleted"
            })
        })
    }

    updateUser (req, res) {
        const query = `
        UPDATE users SET ? where userID = ${req.params.id}
        `
        db.query(query, [req.body, req.params.id], (err) =>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                message: "User details have been updated"
            })
        })
    }
}

module.exports = Users;