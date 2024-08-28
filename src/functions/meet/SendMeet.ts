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

export const sendMeet = async (dataMeet : DataMeetConfig) => {

    const { date, hour, phoneNumber, description, userName, isActive, userId } = dataMeet;

    try {
        const url = "http://localhost:3001/meets/createMeet";

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