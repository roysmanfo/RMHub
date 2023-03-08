import React from 'react';
import Navbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

export default function Profile() {
    // Create a single supabase client for interacting with your database
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

    // Get the currently authenticated user
    async function getUser() {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            console.log('User is logged in');
            console.log('Email:', user.email);
            console.log('User ID:', user.id);
        } else {
            console.log('No user is logged in');
            console.log(user)
        }
        return user;
    }
    const user = getUser();
    console.log(user);
    return (
        <>
            <Navbar />
            <main>
                <h1>Profile</h1>
                {/* <p>Email: { user }</p> */}
            </main>
        </>
    )
}