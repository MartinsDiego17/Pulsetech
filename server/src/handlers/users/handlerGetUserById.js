const { getUserById } = require("../../controllers/users/getUserById");

const handlerGetUserById = async (req, res) => {

    try {
        const { id } = req.params;
        const user_found = await getUserById({ id });
        res.status(200).json(user_found)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { handlerGetUserById };