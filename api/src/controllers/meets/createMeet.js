const { meet } = require('../../database/db');

const createMeet = async ({ id, date, hour, phoneNumber, description, userName, isActive, userId }) => {

    const current_meets = meet.findAll();

    const response = await meet.create({ id, date, hour, phoneNumber, description, userName, isActive, userId });

    console.log("Creando meet - sape")

    return response;

}

module.exports = createMeet;