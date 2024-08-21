const { user } = require("../../database/db");

const getUsers = async () => {

    const users_database = await user.findAll();
    console.log("sape loquita users");
    return [];

};

module.exports = { getUsers };