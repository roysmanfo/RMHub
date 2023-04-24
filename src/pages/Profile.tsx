import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { User, createClient } from '@supabase/supabase-js';
import ENV from '../env';

import "../css/profile/profile.css";

export default function Profile() {
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user ?? null);
        }
        
        async function fetchUserData() {
            let { data, error } = await supabase.from('users').select('*').eq('id', user?.id);
            console.log(data);
            if(error)
                console.log(error);
        }

        fetchUser();
        fetchUserData();
    }, [user]);

    

    return (
        <>
            <Navbar />
            <main className='column no-overflow' style={{ paddingTop: "4rem" }}>
                <section className='profile-banner' style={{ padding: "3rem" }}>
                    <div className="profile-pic"></div>
                    <section className="user-info">
                        <div className="username" style={{ height: "6rem", width: "40rem", background: "#ddd", borderRadius: "10px" }}>{user?.email}</div>
                        <div className="bio" style={{ height: "10rem", width: "30rem", background: "#ddd", borderRadius: "10px" }}></div>
                        <div className="mood" style={{ height: "2.5rem", width: "15rem", background: "#ddd", borderRadius: "10px" }}></div>
                    </section>
                </section>

                {/* <div>
                    {user && <p><b>ID:</b> {user.id}</p>}
                    {user && <p><b>Email:</b> {user.email}</p>}
                    {user && <p><b>Date of creation:</b> {user.created_at}</p>}
                    {user && <p><b>Role:</b> {user.role}</p>}
                </div> */}
                <button className="mainLoginButton" style={{ display: "none" }} onClick={logout}>Logout</button>

            </main>
        </>
    );

    async function logout() {
        // check if user is authenticated
        const { data: { session } } = await supabase.auth.getSession();
        console.log(session);
        if (!session) {
            console.error("Cannot sign out, user is not authenticated.");
            return;
        }

        // sign out user
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
        } else {
            console.log("User signed out.");
        }
        window.location.reload();
    }
}
