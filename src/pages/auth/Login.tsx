import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "../../css/login/login.css";
import logo from "../../img/logos/png/logo-white.png"

import Message from '../../components/Message';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [message, setMessage] = useState('No error to report');
    const [messageType, setMessageType] = useState('message');
    const [messageUpdated, setMessageUpdated] = useState(false);
    const [messageClasses, setClasses] = useState('message');

    // Create a single supabase client for interacting with your database
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL ?? '', process.env.REACT_APP_SUPABASE_KEY ?? '');

    useEffect(() => {
        if (messageUpdated) {
            setClasses("message show");
    
            setTimeout(() => {
                setClasses('message');
                setMessageType('message')
            }, 10000);
            setMessageUpdated(false);
        }
    }, [messageUpdated, setMessageUpdated]);
    

    async function signUp() {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: pass,
            options: {
                emailRedirectTo: '/profile'
            }
        })
        if (error) {
            setMessage(error.message);
            setMessageUpdated(true);
            setMessageType('error');
            return
        }

        let username = generateUsername();
        await createPublicUser(username);
        window.location.href = "/profile";
    }

    async function login() {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })

        if (error) {
            setMessage(error.message);
            setMessageUpdated(true);
            setMessageType('error');

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

    async function recoverPassword(){
        if (email !== ''){
            let { data, error } = await supabase.auth.resetPasswordForEmail(email)
            console.log(data);
            console.log(error);

            if (error){
                setMessage(error.message);
                setMessageUpdated(true);
                setMessageType('error');    
            } else {   
                setMessage('Ti abbiamo inviato una email per resettare la password');
                setMessageUpdated(true);
                setMessageType('success');
                window.location.href = '/password-recovery'
            }

        } else {
            setMessage('Inserisci la tua email');
            setMessageUpdated(true);
            setMessageType('message');

        }

    }

    return (
        <>
            <Message type={messageType} messageClasses={messageClasses} message={message} />
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
                    <p>Password dimenticata?
                        <span style={{ marginLeft: '.7rem', color: '#999', cursor: 'pointer' }} onClick={recoverPassword}>Recupera il tuo account</span>
                    </p>
                </section>
            </main>
        </>
    )
}
