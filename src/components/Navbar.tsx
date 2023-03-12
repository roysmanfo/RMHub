import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

import logo from "../img/logos/png/white-no-background.png";

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
                <Link to="/" className="logo" title="Torna alla pagina principale"><img src={logo} alt="Logo" style={{ width: "4rem" }} /></Link>
                <ul className="navList">
                    <Link to="/home" rel='noopener noreferrer'><li>Home</li></Link>
                    <Link to="/categories" rel='noopener noreferrer'><li>Categorie</li></Link>
                    <Link to="/unavaiable" rel='noopener noreferrer'><li>Docs</li></Link>
                    <Link to="/info" rel='noopener noreferrer'><li>Info</li></Link>
                </ul>
                <LoginButton user={user} />
            </nav>
        );

    return (
        <nav>
            <Link to="/" className="logo" title="Torna alla pagina principale"><img src={logo} alt="Logo" style={{ width: "4rem" }} /></Link>
            <ul className="navList">
                <Link to="/home" rel='noopener noreferrer'><li>Home</li></Link>
                <Link to="/categories" rel='noopener noreferrer'><li>Categorie</li></Link>
                <Link to="/unavaiable" rel='noopener noreferrer'><li>Docs</li></Link>
                <Link to="/info" rel='noopener noreferrer'><li>Info</li></Link>
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
            <Link to="/profile" id='nav-auth-link'>
                <div className="profile">
                    <div className='popup'>Profilo</div>
                </div>
            </Link>
        )
    } else {
        return (
            <Link to="/login" id="nav-auth-link">
                <button className="mainLoginButton" onClick={handleLoginClick} id='nav-button'>Login</button>
            </Link>
        )
    }
}
