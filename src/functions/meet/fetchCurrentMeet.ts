import axios from "axios";
import { getCurrentRoute } from "functions/route/getCurrentRoute";

export const fetchCurrentMeet = async (userId: number) => {

    const final_user_id = userId === undefined ? 0 : userId; 

    try { 
        const url = `${getCurrentRoute()}/meets/${final_user_id}`; 
        console.log("URL: ", url);
        const { data } = await axios(url);
        console.log("DATA: ", data);
        return data;
    } catch (error) {
        console.log("ESTE ES EL ERROR: ", error);
        return { error }
    }

};