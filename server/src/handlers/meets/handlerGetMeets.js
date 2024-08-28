const { getMeets } = require("../../controllers/meets/getMeets");

const handlerGetMeets = async (req, res) => {
    try {
        const meets = await getMeets();
        res.status(200).json(meets)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { handlerGetMeets };