import axios from 'axios';

interface DataLogin {
    email: string;
    password: string;
}

export const createUser = async (dataLogin: DataLogin) => {
    try {
        const url = "http://localhost:3001/users/createUser";

        const response = await axios.post(url, {
            email: dataLogin.email,
            password: dataLogin.password
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
