
const {adidas} = require("../marcas")

const getAdidas = (req, res) => {

    return res.json({
        ok: true,
        statusCode: 200,
        adidas
    });

}

module.exports = {
    getAdidas
}