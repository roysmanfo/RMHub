import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import LinkList from "../components/LinkList";
import '../css/categories/categories.css'



const LINKS: {rel: string; type: string; href: string;}[] = [
    {
        "rel": "stylesheet",
        "type": "text/css",
        "href": "../css/minigiochi/minigiochi.css"
    },
]

export default function Minigiochi() {
    return(
        <>
            <LinkList props = {LINKS} />
            <Navbar />
            <main>
                <p className="font-6 txt-center" style={{marginTop: "10px"}}>Minigiochi</p>
            </main>



        </>
    )    
}