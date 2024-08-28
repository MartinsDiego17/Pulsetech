import axios from 'axios';

interface DataLogin {
    email: string;
    password: string;
}

export const createUser = async (dataLogin: DataLogin) => {

    const meta_route = import.meta.env;
    const route = !meta_route.DEV ? meta_route.PUBLIC_GLOBAL_ROUTE : meta_route.PUBLIC_LOCAL_ROUTE;

    try {
        const url = `${route}/users/createUser`;

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
