
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;


const { getAdidas } = require("./controllers/adidas.controller");
const { getNike } = require("./controllers/nike.controller");
const { getPuma } = require("./controllers/puma.controlles");

app.use(cors());

app.get("/adidas", getAdidas);
app.get("/nike", getNike);
app.get("/puma", getPuma)



app.listen(puerto, () => {
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
})