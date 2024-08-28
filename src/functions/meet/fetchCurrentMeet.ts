import axios from "axios";

export const fetchCurrentMeet = async (userId: number) => {

    try {
        const url = `http://localhost:3001/meets/${userId}`;
        const { data } = await axios(url);
        return data;
    } catch (error) {
        return { error }
    }

};