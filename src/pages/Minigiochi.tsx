import React from "react";
import Navbar from "../components/Navbar"
import Card from "../components/Card"

import "../css/categories/categories.css"
import "../css/minigiochi/minigiochi.css"

import scissors from "../img/generic/scissors3d.png"
import slot from "../img/generic/slot-machine.png"

const CARDS = [
    {
        "caption": "Sasso Carta Forbice",
        "img": scissors,
        "link": "sasso-carta-forbice/",
        "id": "sasso-carta-forbice"
    },
    {
        "caption": "Slot Machines",
        "img": slot,
        "link": "slot-machine/",
        "id": "slot-machine"
    }
]


export default function Minigiochi() {
    return (
        <>
            <Navbar />
            <main style={{ flexDirection: "column" }}>
                <p className="font-9 weight-8 txt-center" style={{ marginTop: "10px", width: "100%", textTransform: "uppercase" }}>Minigiochi</p>
                <section style={{ display: "flex", justifyContent: "center" }}>
                    <Card caption={CARDS[0].caption} img={CARDS[0].img} link={CARDS[0].link} id={CARDS[0].id} />
                    <Card caption={CARDS[1].caption} img={CARDS[1].img} link={CARDS[1].link} id={CARDS[1].id} />
                </section>
            </main>
        </>
    )
}
