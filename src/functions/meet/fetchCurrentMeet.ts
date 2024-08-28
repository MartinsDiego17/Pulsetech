import axios from "axios";

export const fetchCurrentMeet = async (userId: number) => {

    const meta_route = import.meta.env;
    const route = !meta_route.DEV ? meta_route.PUBLIC_GLOBAL_ROUTE : meta_route.PUBLIC_LOCAL_ROUTE;

    try {
        const url = `${route}/meets/${userId}`;
        const { data } = await axios(url);
        return data;
    } catch (error) {
        return { error }
    }

};