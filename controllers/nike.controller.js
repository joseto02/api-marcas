const { nike } = require("../marcas")

const getNike = (req, res) => {

    return res.json({
        ok: true,
        statusCode: 200,
        nike
    });

}

module.exports = {
    getNike
}