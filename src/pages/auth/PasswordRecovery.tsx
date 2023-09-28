import React, { useEffect, useState } from 'react';
import { User, createClient } from '@supabase/supabase-js';
import "../../css/login/login.css";
import logo from "../../img/logos/png/logo-white.png"

import Message from '../../components/Message';

export default function PasswordRecovery() {
    const supabase = createClient(process.env.REACT_APP_SUPABASE_URL ?? '', process.env.REACT_APP_SUPABASE_KEY ?? '');
    const [user, setUser] = useState<User | null>(null);
    const [pass, setPass] = useState('');

    const [message, setMessage] = useState('No error to report');
    const [messageType, setMessageType] = useState('message');
    const [messageUpdated, setMessageUpdated] = useState(false);
    const [messageClasses, setClasses] = useState('message');


    useEffect(() => {
        async function fetchUser() {
            if (user === null) {
                const { data: { user } } = await supabase.auth.getUser();
                setUser(user ?? null);
            }
        }

        if (messageUpdated) {
            setClasses("message show");
    
            setTimeout(() => {
                setClasses('message');
                setMessageType('message')
            }, 10000);
            setMessageUpdated(false);
        }

        fetchUser();
    }, [supabase, user, messageUpdated])

    async function restoreAccount(){
        
        const { data, error } = await supabase.auth.updateUser({
            email: user?.email,
            password: pass,
        })
        if (error){
            setMessage(error?.message);
            setMessageUpdated(true);
            setMessageType('error');
        }
        if (data){
            setMessage("Account aggiornato");
            setMessageUpdated(true);
            setMessageType('success');
            setTimeout(() => {
                window.location.href = '/profile'
            }, 2000)
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
                    <h1>Password Reset</h1>
                    <input name='password' type="password" id="password" placeholder='Nuova password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <div className="button-wrapper">
                        <button onClick={restoreAccount}>Reset password</button>
                    </div>
                </section>
            </main>
        </>
    )

}