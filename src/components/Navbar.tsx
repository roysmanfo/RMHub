import React from 'react';
import '../css/global.css';

function Navbar() {
  return (
    <nav>
        <a href="/" className="logo" title="Torna alla pagina principale"><span>RMHub</span></a>
        <ul className="navList">
            <a href="h.html" rel="noopener noreferrer">
                <li>Home</li>
            </a>
            <a href="categories/">
                <li>Categorie</li>
            </a>
            <a href="/unavaiable.html" rel="noopener noreferrer">
                <li>Docs</li>
            </a>
            <a href="/info/" rel="noopener noreferrer">
                <li>Info</li>
            </a>
        </ul>
        <a href="/login/"><button className="mainLoginButton">Login</button></a>
    </nav>
  );
}

export default Navbar;
