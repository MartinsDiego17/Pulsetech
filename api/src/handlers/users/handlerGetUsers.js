const { getUsers } = require("../../controllers/users/getUsers");

const handlerGetUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = { handlerGetUsers };