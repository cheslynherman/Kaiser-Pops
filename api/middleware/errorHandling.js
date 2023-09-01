function errorHandling(err, req, res, next) {
    if (err) {
        let status = err.status || 500
        res.json ({
            status,
            message: "An error occurred, try again soon."
        })
    }
}

module.exports = {errorHandling};