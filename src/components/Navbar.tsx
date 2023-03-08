import React from 'react';
import logo from "../img/logos/png/white-no-background.png";
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);
export default function Navbar(props: any) {

    if (props.index) {
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
                <LoginButton index />
            </nav>
        );
    } else {
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
}

function LoginButton(props: any) {
    // Get the currently authenticated user
    function getUser() {
        const user  = supabase.auth.getUser();
        return user;
    }
    const user = getUser();

    if (user !== null) {
        if (props.index) {
            return (<a href="/login"><button className="mainLoginButton" style={{ background: "#4443" }}>Login</button></a>)
        } else {
            return (<a href="/login"><button className="mainLoginButton">Login</button></a>);
        }
    } else {
        return (
            <a href="/profile"><button className="mainLoginButton">Profile</button></a>
        )
    }
}