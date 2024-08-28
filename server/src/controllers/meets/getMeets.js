const { meet } = require("../../database/db");

const getMeets = async () => {

    const meets_database = await meet.findAll();
    return meets_database;

};

module.exports = { getMeets };