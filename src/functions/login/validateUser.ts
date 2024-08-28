import axios from 'axios';
import { addUser } from '../user/addUser';

interface DataLogin {
    id: number
    email: string;
    password: string;
}

export const validateUser = async (dataLogin: DataLogin) => {

    const meta_route = import.meta.env;
    const route = !meta_route.DEV ? meta_route.PUBLIC_GLOBAL_ROUTE : meta_route.PUBLIC_LOCAL_ROUTE;

    try {
        const url = `${route}/users/validate`;

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
