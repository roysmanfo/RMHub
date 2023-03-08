import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from "react-router-dom";
import ENV from '../env';
import "../css/login/login.css";
import logo from "../img/logos/png/logo-white.png"


export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // Create a single supabase client for interacting with your database
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

    const navigate = useNavigate();

    const redirect = (path: string) => {
        navigate(path);
    }

    async function signUp() {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
            options: {
                emailRedirectTo: '/profile'
            }
        })

        if (error) {
            console.log(error);
            return
        }
        const { data: userData, error: userError } = await supabase.from('users').insert({ email: email }).single();
        if (userError) {
            console.log(userError);
            return
        }

        redirect("/profile");
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
        const { data: userData, error: userError } = await supabase.from('users').insert({ email: email }).single();
        if (userError) {
            console.log(userError);
            return
        }

        redirect("/profile");
    }

    return (
        <>
            <main className='login-main'>
                <aside style={{ height: "100%" }}>
                    <img src={logo} alt="Logo" draggable="false" />
                </aside>
                <section>
                    <h1>Sign</h1>
                    <input name='email' type="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input name='password' type="password" id="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <div className="button-wrapper">
                        <button onClick={login}>Login</button>
                        <button onClick={signUp}>Sign Up</button>
                    </div>
                </section>
            </main>
        </>
    )
}
