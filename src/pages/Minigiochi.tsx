import React from "react";
import Navbar from "../components/Navbar"
import Card from "../components/Card"

import "../css/categories/categories.css"
import "../css/minigiochi/minigiochi.css"

import street from "../img/generic/bg-main_2.jpg"

import ENV from '../env';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://roswbhnqbfckiuczsnrh.supabase.co', ENV.SUPABASE_KEY);
async function usr() {
    const { data: { user } } = await supabase.auth.getUser()
    console.log(user);
}



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
                <button onClick={usr}> s</button>
                <p className="font-6 txt-center" style={{ marginTop: "10px", width: "100%" }}>Minigiochi</p>
                <section style={{ display: "flex", justifyContent: "space-around" }}>
                    <Card caption={CARDS[0].caption} img={CARDS[0].img} link={CARDS[0].link} id={CARDS[0].id} />
                </section>
            </main>



        </>
    )
}
