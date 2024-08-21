const createMeet = require("../../controllers/meets/createMeet");

const handlerCreateMeet = async (req, res) => {

    try {
        const { id, date, hour, phoneNumber, description, userName, isActive, userId } = req.body;
            const meet_create = await createMeet({ id, date, hour, phoneNumber, description, userName, isActive, userId });
        res.status(200).json(meet_create)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreateMeet;