const {express, routes} = require("./controller");
const path = require("path");
const port = +process.env.port || 3000;
const app= express ();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

app.use(express.static("./static"));

app.use(express.urlencoded({extended:false}), routes);

routes.get("^/$|/Kaiser-Pops", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
});

app.listen(port, () => {
    console.log(`You are listening on port ${port}`);
});