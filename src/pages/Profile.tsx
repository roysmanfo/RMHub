import React from 'react';
import Navbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

import "../css/profile/profile.css";

export default function Profile() {
    // Create a single supabase client for interacting with your database
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

    return (
        <>
            <Navbar />
            <main className='column no-overflow' style={{ paddingTop: "4rem" }}>
                <section className='profile-banner' style={{ padding: "3rem" }}>
                    <div className="profile-pic"></div>

                </section>

                {/* <div>
                    {user && <p><b>ID:</b> {user.id}</p>}
                    {user && <p><b>Email:</b> {user.email}</p>}
                    {user && <p><b>Date of creation:</b> {user.created_at}</p>}
                    {user && <p><b>Role:</b> {user.role}</p>}
                </div> */}
                <button className="mainLoginButton" onClick={logout}>Logout</button>

            </main>
        </>
    );

    async function logout() {
        // check if user is authenticated
        const session = supabase.auth.getSession();
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
