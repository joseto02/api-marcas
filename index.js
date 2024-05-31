
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;


const { getAdidas } = require("./controllers/adidas.controller")
const { getNike } = require("./controllers/nike.controller")
const { getPuma } = require("./controllers/puma.controlles")

app.use(cors());

app.get("/", getAdidas)
app.get("/", getNike)
app.get("/", getPuma)


app.listen(puerto, () => {
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
})