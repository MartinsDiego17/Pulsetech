import axios from 'axios';
import { getCurrentRoute } from 'functions/route/getCurrentRoute';

interface DataLogin {
    email: string;
    password: string;
}

export const createUser = async (dataLogin: DataLogin) => {


    try {
        const url = `${getCurrentRoute()}/users/createUser`;

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
