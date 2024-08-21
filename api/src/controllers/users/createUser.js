const { user } = require('../../database/db');

const createUser = async ({ id, email }) => {


    const current_users = user.findAll();

    const response = await user.create({
        id,
        email
    });

    console.log("Creando usuario - sape")

    return response;

}

module.exports = createUser;