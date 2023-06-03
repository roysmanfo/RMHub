import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';
import "../css/login/login.css";
import logo from "../img/logos/png/logo-white.png"

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('No error to report');
    const [errorMessageUpdated, setErrorMessageUpdated] = useState(false);
    const [errorClasses, setErrorClasses] = useState('error-message');

    useEffect(() => {
        if (errorMessageUpdated) {
            setErrorClasses("error-message show");

            setTimeout(() => {
                setErrorClasses('error-message');
            }, 5000);
            setErrorMessageUpdated(false);
        }
    }, [errorMessageUpdated, setErrorMessageUpdated]);


    // Create a single supabase client for interacting with your database
    const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

    async function signUp() {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: pass,
            options: {
                emailRedirectTo: '/profile'
            }
        })
        if (error) {
            setErrorMessage(error.message);
            setErrorMessageUpdated(true);
            return
        }

        let username = generateUsername();
        let successfull = await createPublicUser(username);
            window.location.href = "/profile";
    }

    async function login() {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })

        if (error) {
            setErrorMessage(error.message);
            setErrorMessageUpdated(true);
            return
        }
        window.location.href = "/profile";
    }

    function generateUsername() {
        return 'user_' + Math.random().toString(36).substring(2, 20) + Math.random().toString(36).substring(2, 20);
    }

    async function createPublicUser(username: string) {
        const { data: { user } } = await supabase.auth.getUser();
        const { data, error } = await supabase
            .from('users')
            .insert([
                { id: user?.id, username: username, biography: '' },
            ])
        return error === null && data != null;
    }

    function ErrorMessage() {
        return (
            <div className={errorClasses} id='error-message'>
                {errorMessage}
            </div>
        )
    }

    return (
        <>
            <ErrorMessage />
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
