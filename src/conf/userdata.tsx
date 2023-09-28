import { user, session, userdata } from "./supabase";
import { User, Session } from "@supabase/supabase-js"

class UserManager {
    user: User | null;
    session: Session | null;    
    userdata: {[x: string]: any;} | null; 
    
    constructor () {
        this.user = user ? user : null;
        this.session = session ? session : null;
        this.userdata = userdata;
    }
} 

const usermanager = new UserManager();
export default usermanager