const createUser = require("../../controllers/users/createUser");

const handlerCreateUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user_create = await createUser({ email, password });
        res.status(200).json(user_create)

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerCreateUser;