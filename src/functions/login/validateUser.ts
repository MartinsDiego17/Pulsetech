import axios from 'axios';
import { addUser } from '../user/addUser';

interface DataLogin {
    id: number
    email: string;
    password: string;
}

export const validateUser = async (dataLogin: DataLogin) => {
    try {
        const url = "http://localhost:3001/users/validate";

        const response = await axios.post(url, {
            email: dataLogin.email,
            password: dataLogin.password
        });

        if(response.data) {
            addUser(response.data);
        }

        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
