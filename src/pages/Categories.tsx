import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../css/categories/categories.css'

const CATEGORIES = [
    {
        "name": "Minigiochi",
        "description": "I minigiochi sono una categoria di giochi brevi ma che intrattengono molto"
    },
    {
        "name": "Produttivitá",
        "description": "Diversi programmi per potenzaiare la tua produttivitò usando solo una risorsa."
    },
    {
        "name": "Utility",
        "description": "Piccoli aiuti per fare cose semplici, ma in modo più rapido ed efficace."
    },
    {
        "name": "Themes",
        "description": "Pagine web prefabbricate per avere un punto di partenza nei tuoi progetti."
    },

]

export default function Categories(){
    return(
        <>
            <Navbar />
            <main>
            <aside className="leftList">
                <div className="options font-1">
                    <p className="font-5">Categorie</p>
                    <ul className="leftUl">
                        <li><a href="/minigiochi/" className="col-info">Minigiochi</a></li>
                        <li><a href="/produttività/" className="col-info">Produttività</a></li>
                        <li><a href="/utility/" className="col-info">Utility</a></li>
                        <li><a href="/themes/" className="col-info">Themes</a></li>
                    </ul>
                </div>
                <p className="font-5" style={{color: "transparent"}}>Categorie</p>
            </aside>
            <section className="rightList">
                <p className="font-5 txt-center">Introduzione</p>
                <p className="txt-center">
                    Trova quel che ti serve nel RMHub. <br /><br />
                    Ecco una lista di categorie che puoi trovare nel sito. Scegli quella che ti serve e inizia ad esplorare!
                    </p><ul className="summary">
                        <li id="minigame-btn"><a href="#minigiochi">Minigiochi</a></li>
                        <li id="productivity-btn"><a href="#produttività">Produttività</a></li>
                        <li id="utility-btn"><a href="#utility">Utility</a></li>
                        <li id="themes-btn"><a href="#themes">Themes</a></li>
                    </ul>
                <div className="article-wrapper">

                    <article id="minigiochi">
                        <p className="font-3">Minigiochi</p>
                    <p>
                        I <span className="weight-6"> <a href="/minigiochi/">minigiochi</a></span>  sono una categoria di giochi brevi ma che intrattengono molto
                    </p>
                    
                    
                </article>
                <article id="produttività">
                    <p className="font-3">Produttività</p>
                    <p>Diversi programmi per potenzaiare la tua <a href="/source/produttività/">produttivitò</a> usando solo una risorsa. </p>
                        
                </article>
                <article id="utility">
                    <p className="font-3">Utility</p>
                    <p> <a href="/utility/">Piccoli aiuti</a> per fare cose semplici, ma in modo più rapido ed efficace.</p>
                    
                </article>
                <article id="themes">
                    <p className="font-3">Themes</p>
                    <p><a href="/themes/">Pagine web prefabbricate</a> per avere un punto di partenza nei tuoi progetti.</p>
                    
                </article>
            </div>
                <Footer />
            </section>
        </main>
            
        </>
    )
}