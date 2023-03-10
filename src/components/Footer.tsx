import React from 'react';
import instagram from '../img/icons/instagram.svg';
import github from '../img/icons/github.svg';
import twitter from '../img/icons/twitter.svg';
export default function Footer(){
    return(
        <footer className="col-white">
            <h2 className="txt-center font-5" style={{gridArea: "title"}}>Roys Manfo Hub</h2>
                    <div id="explore">
                        <ul className="footer-list col-white">
                            <h3>Esplora</h3>
                            <a href="/home" rel="noopener noreferrer">
                                <li>Home</li>
                            </a>
                            <a href="/categories" rel="noopener noreferrer">
                                <li>Categorie</li>
                            </a>
                            <a href="/unavaiable" rel="noopener noreferrer">
                                <li>Docs</li>
                            </a>
                            <a href="/info" target="_blank" rel="noopener noreferrer">
                                <li>Info</li>
                            </a>
                        </ul>
                    </div>
                <div id="socials" >   
                    <ul className="socialList">
                        <h3>Altro</h3>
                        <a href="https://www.instagram.com/roys_manfo/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <li><img src={instagram} alt="Instagram" />Instagram</li>
                        </a>
                        <a href="https://github.com/RoysManfo" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <li><img src={github} alt="GitHub" />GitHub</li>
                        </a>
                        <a href="https://twitter.com/roysmanfo_" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <li><img src={twitter} alt="Twitter" />Twitter</li>
                        </a>
                    </ul>
                </div>
        </footer>
    )
}