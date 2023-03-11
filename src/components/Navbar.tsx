import React, { useState, useEffect } from 'react';
import logo from "../img/logos/png/white-no-background.png";
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);

export default function Navbar(props: any) {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        async function fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        }
        fetchUser();
    }, []);
    if (props.index)
        return (
            <nav style={{ background: "transparent", opacity: 0, animation: "light 1s ease 4s forwards" }}>
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
                <LoginButton user={user} />
            </nav>
        );

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
            <LoginButton user={user} />
        </nav>
    );
}

function LoginButton(props: any) {

    function handleLoginClick() {
        window.location.href = "/login";
    }

    if (props.user !== null) {
        return (
            <a href="/profile" id='nav-auth-link'>
                <div className="profile">
                    <div className='popup'>Profilo</div>
                </div>
            </a>
        )
    } else {
        return (
            <a href="/login" id="nav-auth-link">
                <button className="mainLoginButton" onClick={handleLoginClick} id='nav-button'>Login</button>
            </a>
        )
    }
}
