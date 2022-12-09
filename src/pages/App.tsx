import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/home/home.css'

import dices from '../img/generic/dices.jpg'
import appsImg from '../img/generic/apps-img.jpg'
import codeImg from '../img/generic/code-img.jpg'

function RootPage() {
    return (
        <>
            <Navbar />
            <main style={{ display: "block" }}>

                <header className="intro txt-center">
                    <span>Roys Manfo Hub</span>
                    <div className="block block_one"></div>
                    <div className="block block_two"></div>
                    <div className="block block_three"></div>
                    <div className="block block_four"></div>
                    <div className="block block_five"></div>
                </header>
                <h1 className="txt-center">Trova quel che ti serve</h1>

                <section className="displayer">
                    <div className="displayer-item col-white" id="Card1" style={{ backgroundImage: "url(" + dices +")" }}>
                        <div>
                            <p className="font-5  weight-7">Minigiochi</p>
                            <p className="font-2 paragraph">Fai piccole partite su diversi minigiochi creati da me</p>
                        </div>
                    </div>
                    <div className="displayer-item col-white" id="Card2" style={{ backgroundImage: "url(" + appsImg +")" }}>
                        <div>
                            <p className="font-5  weight-7">App</p>
                            <p className="font-2 paragraph">Installa app e giochi</p>
                        </div>
                    </div>
                    <div className="displayer-item col-white" id="Card3" style={{ backgroundImage: "url(" + codeImg +")" }}>
                        <div>
                            <p className="font-5  weight-7">Themes</p>
                            <p className="font-2 paragraph">Developer? <br /> Ti serve uno spunto? Sai dove cliccare!</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    );
}
function Home(){
    return(
        <>
            <Navbar />
            <header className="HomeIntro ">
                <div style={{width: "50%", display: "grid", placeItems: "center"}}>
                    <div className="typingAnim">
                        <p className="typingTxt font-9">Roys Manfo Hub</p>
                    </div>
                    <div></div>
                </div>
                <div style={{width: "50%", height: "100%", display: "flex", justifyContent: "center"}}>
                    <div className="HomeWellcome">
                        <h1 className="col-primary">Benvenuto nell'Hub</h1>
                        <p className="weight-5 font-2"><br />
                            Questo è il posto dove caricherò i miei progetti, app e altri contenuti.
                            <br />
                            <a href="/categories/">Fai un giro</a> e guarda cosa c'è di interessante da vedere.
                        </p>
                    </div>
                </div>
                
            </header>
            <Footer />
        </>
    )
}
export default function App(props: any) {
    if (props.root){
        return(
            <RootPage />
        );
    }else{
        return(
            <Home />
        );
    }
}