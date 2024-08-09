import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <footer className="col-white">
            <h2 className="txt-center font-5" style={{gridArea: "title"}}>Roys Manfo Hub</h2>
                    <div id="explore">
                        <ul className="footer-list col-white">
                            <h3 className='font-5'>Esplora</h3>
                            <Link to="/home" rel='noopener noreferrer'><li>Home</li></Link>
                            <Link to="/categories" rel='noopener noreferrer'><li>Categorie</li></Link>
                            <Link to="/unavaiable" rel='noopener noreferrer'><li>Docs</li></Link>
                            <Link to="/info" rel='noopener noreferrer'><li>Info</li></Link>
                        </ul>
                    </div>
                <div id="socials" >   
                    <ul className="socialList">
                        <h3 className='font-5'>Altro</h3>
                        <Link to="https://www.instagram.com/roys_manfo/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <li><i className="bi bi-instagram" />Instagram</li>
                        </Link>
                        <Link to="https://github.com/RoysManfo" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <li><i className="bi bi-github" />GitHub</li>
                        </Link>
                        <Link to="https://twitter.com/roysmanfo_" target="_blank" rel="noopener noreferrer" title="Twitter">
                            <li><i className="bi bi-twitter" />Twitter</li>
                        </Link>
                    </ul>
                </div>
        </footer>
    )
}