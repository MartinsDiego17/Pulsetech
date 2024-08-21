const { meet } = require("../../database/db");

const getMeets = async () => {

    const meets_database = await meet.findAll();
    console.log("sape loquita");
    return [];

};

module.exports = { getMeets };