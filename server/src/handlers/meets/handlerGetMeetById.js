const { getMeetById } = require("../../controllers/meets/getMeetById");

const handlerGetMeetById = async (req, res) => {

    try {
        const { id } = req.params;
        const meet_found = await getMeetById({ id });
        res.status(200).json(meet_found)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { handlerGetMeetById };