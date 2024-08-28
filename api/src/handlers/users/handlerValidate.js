const { validateUser } = require("../../controllers/users/validateUser");

const handlerValidateUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user_validate = await validateUser({ email, password });
        res.status(200).json(user_validate);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = handlerValidateUser;