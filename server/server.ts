//Définition des modules
const express = require("express");
const db = require("sqlite3");
const path = require("path");
const bodyParser = require('body-parser');
require('dotenv').config();

// Objet express
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

// CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Routeur
const router = express.Router();
app.use("/article", router);
require(__dirname + "/controllers/articlesController")(router)
app.use(express.static(path.join(__dirname, "../../client", "build")));
app.use(express.static("public"));


//Mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));

require('./controllers/tunnel/tunnel');