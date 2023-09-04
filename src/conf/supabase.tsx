import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL || "",
    process.env.REACT_APP_SUPABASE_KEY || ""
);


export async function fetchUser() {
    try {
        const {data, error} = await supabase.auth.getUser();
        if (data)
            return data.user;
        
        if (error)
            throw error;

    } catch (error: any) {
        console.log(error.msg);
    }
}

export async function fetchSession() {
    try {
        const {data, error} = await supabase.auth.getSession();
        if (data)
            return data.session;
        
        if (error)
            throw error;

    } catch (error: any) {
        console.log(error.message);
    }
}

export async function fetchUserData(id: string) {
    try {
        const {data, error} = await supabase.from("users").select().eq("id", id).single();

        if (data)
            return data.session;
        
        if (error)
            throw error;

    } catch (error: any) {
        console.log(error.message);
    }
}




export default supabase;
export const user = await fetchUser();
export const session = await fetchSession();
export const userdata: {[x: string]: any;} | null  = user ? await fetchUserData(user?.id) : null;


