import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Card from "../components/Card"

import "../css/categories/categories.css"
import "../css/minigiochi/minigiochi.css"

import pic from "../img/generic/bg-main_2.jpg"

export default function Minigiochi() {
    return(
        <>
            <Navbar />
            <main style={{ flexDirection : "column" }}>
                <p className="font-6 txt-center" style={{marginTop: "10px", width: "100%"}}>Minigiochi</p>
                <section style={{ display: "flex", justifyContent: "space-around" }}>
                    <Card caption="Sasso Carta Forbice" img={pic} link="sasso-carta-forbice/" id="sasso-carta-forbice" />
                </section>
            </main>



        </>
    )    
}