const { user } = require("../../database/db");

const validateUser = async ({ email, password }) => {

    const user_validate = await user.findOne({ where: { email: email, password: password } });
    return user_validate;

};

module.exports = { validateUser };