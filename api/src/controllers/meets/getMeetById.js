const { meet } = require("../../database/db");

const getMeetById = async ({ id }) => {
    const meet_found = await meet.findOne({ where: { userId: id } });
    if (!meet_found) return { error: "No hemos podido encontrar reunión con ese ID." };
    return meet_found;
};

module.exports = { getMeetById };
