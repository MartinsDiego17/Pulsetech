const { user } = require('../../database/db');

const createUser = async ({ email, password }) => {

    const current_users = await user.findAll();
    let existent = 0;

    current_users.forEach(user => {
        if (user.dataValues.email === email) existent = 1;
    });

    if (existent) return { error: "Ya hay un usuario registrado con este email." };


    const response = await user.create({
        email,
        password
    });


    return response;

}

module.exports = createUser;