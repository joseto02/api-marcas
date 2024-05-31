const { puma } = require("../marcas")

const getPuma = (req, res) => {

    return res.json({
        ok: true,
        statusCode: 200,
        puma
    });
}
module.exports = {
    getPuma
}