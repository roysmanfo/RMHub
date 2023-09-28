import React from 'react';
import { Link } from 'react-router-dom';
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
                        <p className="typingTxt">Roys Manfo Hub</p>
                    </div>
                    <div></div>
                </div>
                <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center" }}>
                    <div className="HomeWellcome">
                        <h1 className="col-info">Benvenuto nell'Hub</h1>
                        <p className="weight-5 font-2"><br />
                            Questo è il posto dove caricherò i miei progetti, app e altri contenuti.
                            <br />
                            <Link to="/categories/">Fai un giro</Link> e guarda cosa c'è di interessante da vedere.
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