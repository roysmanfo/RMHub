import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "../css/login/login.css";
import ENV from '../env';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // Create a single supabase client for interacting with your database
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

    async function signUp() {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
        })

        if (error) {
            console.log(error);
            return
        }
        console.log(data)
        const { data: userData, error: userError } = await supabase.from('users').insert({ email: email }).single();
        if (userError) {
            console.log(userError);
            return
        }

        console.log(userData);
    }

    async function login() {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })

        if (error) {
            console.log(error);
            return
        }
        console.log(data)
        const { data: userData, error: userError } = await supabase.from('users').insert({ email: email }).single();
        if (userError) {
            console.log(userError);
            return
        }

        console.log(userData);
    }

    return (
        <>
            <main className='login-main'>
                <form action="" method="post">
                    <h1 style={{ marginBottom: "4rem", color: "#999" }}>Login</h1>
                    <input name='email' type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input name='password' type="password" id="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <div className="button-wrapper">
                        <button onClick={login} type="button">Login</button>
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                </form>
            </main>
        </>
    )
}
