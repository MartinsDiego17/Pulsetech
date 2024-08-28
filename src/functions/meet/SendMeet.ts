import axios from "axios";

interface DataMeetConfig {
    date: string,
    hour: string,
    phoneNumber: string,
    description: string,
    userName: string,
    isActive: boolean,
    userId: number
}

export const sendMeet = async (dataMeet: DataMeetConfig) => {

    const { date, hour, phoneNumber, description, userName, isActive, userId } = dataMeet;

    const meta_route = import.meta.env;
    const route = !meta_route.DEV ? meta_route.PUBLIC_GLOBAL_ROUTE : meta_route.PUBLIC_LOCAL_ROUTE;

    try {
        const url = `${route}/meets/createMeet`;

        const response = await axios.post(url, {
            date,
            hour,
            phoneNumber,
            description,
            userName,
            isActive,
            userId
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}