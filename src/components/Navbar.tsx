import React from 'react';
import logo from "../img/logos/png/white-no-background.png";
import { createClient } from '@supabase/supabase-js';
import ENV from '../env';

const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);
let loggedUser: any = null;

export default function Navbar(props: any) {
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
                <LoginButton />
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
            <LoginButton />
        </nav>
    );
}
async function getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        loggedUser = user;
        let b: HTMLElement | null = document.getElementById("nav-auth-link");

        if (b != null)
            b.setAttribute("href", "/profile");
    }
    else {
        loggedUser = null;
        let a: HTMLElement | null = document.getElementById("nav-button");
        let b: HTMLElement | null = document.getElementById("nav-auth-link");

        if (a != null)
            a.innerText = "Login";
        if (b != null)
            b.setAttribute("href", "/login");
    }

}
function LoginButton() {

    function handleLoginClick() {
        window.location.href = "/login";
    }
    getUser()
    if (loggedUser !== null) {
        return (
            <a href="/profile" id='nav-auth-link'>
                <div className="profile">
                    <div className='popup'>Profilo</div>
                </div>
            </a>
        )
    } else {
        return (
            <a href="/profile" id="nav-auth-link">
                <button className="mainLoginButton" onClick={handleLoginClick} id='nav-button'>Login</button>
            </a>
        )
    }
}

