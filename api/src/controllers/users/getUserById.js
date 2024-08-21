const { user } = require("../../database/db");

const getUserById = async ({ id }) => {
    const user_found = await user.findOne({ where: { id: id } });
    if (!user_found) return { error: "No hemos podido encontrar usuarios con ese ID." };
    return user_found;
};

module.exports = { getUserById };
