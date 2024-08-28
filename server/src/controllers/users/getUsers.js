const { user } = require("../../database/db");

const getUsers = async () => {

    const users_database = await user.findAll();
    return users_database;

};

module.exports = { getUsers };