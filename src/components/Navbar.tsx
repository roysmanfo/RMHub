import React, { useState, useEffect } from 'react';
import logo from "../img/logos/png/white-no-background.png";
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

export default function Navbar(props: any) {
    return (
        <nav>
            <a href="/" className="logo" title="Torna alla pagina principale"><img src={logo} alt="Logo" style={{ width: "4rem" }} /></a>
            <ul className="navList">
                <a href="/home" rel="noopener noreferrer">
                    <li>Home</li>
                </a>
                <a href="/categories">
                    <li>Categorie</li>
                </a>
                <a href="/unavaiable" rel="noopener noreferrer">
                    <li>Docs</li>
                </a>
                <a href="/info" rel="noopener noreferrer">
                    <li>Info</li>
                </a>
            </ul>
            <LoginButton />
        </nav>
    );
}
async function getUser() {
        const { data: session, error } = await supabase.auth.getSession();
        if (error) {
            console.error(error);
            return null;
        }
        console.log(session);
        return null;
    }
function LoginButton() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        setUser(getUser());

    }, []);

    function handleLoginClick() {
        window.location.href = "/login";
    }
    if (user !== null) {
        return (
            <a href="/profile">
                <button className="mainLoginButton">Profile</button>
            </a>
        )
    } else {
        return (
            <button className="mainLoginButton" onClick={handleLoginClick}>Login</button>
        )
    }
}
