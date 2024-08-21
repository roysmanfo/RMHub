import React from "react";
import Navbar from "../components/Navbar"
import Card from "../components/Card"

import "../css/categories/categories.scss"
import "../css/minigiochi/minigiochi.scss"

import scissors from "../img/generic/scissors3d.png"
import slot from "../img/generic/slot-machine.png"
import swiftcalc from "../img/generic/swiftcalc.png"

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
    },
    {
        "caption": "Swiftcalc",
        "img": swiftcalc,
        "link": "https://swiftcalc.vercel.app/",
        "id": "swiftcalc"
    }
]


export default function Minigiochi() {
    return (
        <>
            <Navbar />
            <main style={{ flexDirection: "column" }}>
                <p className="font-9 weight-8 txt-center" style={{ marginTop: "10px", width: "100%", textTransform: "uppercase" }}>Minigiochi</p>
                <section style={{ display: "flex", justifyContent: "center" }}>
                    {
                        CARDS.map((c) => <Card caption={c.caption} img={c.img} link={c.link} id={c.id} />)
                    }
                </section>
            </main>
        </>
    )
}
