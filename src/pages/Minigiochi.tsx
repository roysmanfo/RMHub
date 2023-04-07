import React from "react";
import Navbar from "../components/Navbar"
import Card from "../components/Card"

import "../css/categories/categories.css"
import "../css/minigiochi/minigiochi.css"

import street from "../img/generic/scissors3d.png"

const CARDS = [
    {
        "caption": "Sasso Carta Forbice",
        "img": street,
        "link": "sasso-carta-forbice/",
        "id": "sasso-carta-forbice"
    }
]


export default function Minigiochi() {
    return (
        <>
            <Navbar />
            <main style={{ flexDirection: "column" }}>
                <p className="font-9 weight-8 txt-center" style={{ marginTop: "10px", width: "100%", textTransform: "uppercase" }}>Minigiochi</p>
                <section style={{ display: "flex", justifyContent: "space-around" }}>
                    <Card caption={CARDS[0].caption} img={CARDS[0].img} link={CARDS[0].link} id={CARDS[0].id} />
                </section>
            </main>
        </>
    )
}
