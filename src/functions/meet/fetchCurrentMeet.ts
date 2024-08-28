import axios from "axios";
import { getCurrentRoute } from "functions/route/getCurrentRoute";

export const fetchCurrentMeet = async (userId: number) => {

    const final_user_id = userId === undefined ? 0 : userId; 

    try {
        const url = `${getCurrentRoute()}/meets/${final_user_id}`;
        const { data } = await axios(url);
        return data;
    } catch (error) {
        return { error }
    }

};