import React from 'react';
import Navbar from '../components/Navbar'
import '../css/home/home.css'

import dices from '../img/generic/dices.jpg'
import appsImg from '../img/generic/apps-img.jpg'
import codeImg from '../img/generic/code-img.jpg'

function RootPage() {
    return (
        <>
            <Navbar />
            <main>

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
        </>

    );
}

export default function App(props: any) {
    if (props.root){
        return(
            <RootPage />
        );
    }else{
        return(
            <h1>home</h1>
        );
    }
}