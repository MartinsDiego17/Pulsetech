import { createClient } from "@supabase/supabase-js";

const url = "https://izelvzaosgpqcmzerwro.supabase.co";
const apiKey = import.meta.env.PUBLIC_SUPABASE_APIKEY;

export const supabase = createClient(url, apiKey);

export const logUsers = async () => {
    let { data: users, error } = await supabase
        .from('users').select("*")

    if (error) {
        console.error("Error fetching users:", error);
    } else {
        console.log("List of users:", users);
    }
};

