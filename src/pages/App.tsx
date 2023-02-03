import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../css/home/home.css"


function RootPage() {
    return (
        <>
            <Navbar index />
            <main style={{ display: "flex" }} className="intro txt-center">
                <div className="anim"></div>
                <span className='l1'>R</span>
                <span className='l2'>M</span>
                <span className='l3'>H</span>
            </main>
        </>

    );
}
function Home() {
    return (
        <>
            <Navbar />
            <header className="HomeIntro ">
                <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
                    <div className="typingAnim">
                        <p className="typingTxt font-9">Roys Manfo Hub</p>
                    </div>
                    <div></div>
                </div>
                <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center" }}>
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
    if (props.root) {
        return (
            <RootPage />
        );
    } else {
        return (
            <Home />
        );
    }
}