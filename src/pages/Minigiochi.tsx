import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export default Minigiochi;


class LinkList{
    private links: string[] = [];

    // Pass in a list of objects describing <link> elements where each link is in format
    /*
    {
        "rel": "...",
        "type": "...",
        "href": "...",
    }
    */
    
    constructor(links: string[]) {

    }

}


function addLinks(){
    const links = document.querySelector('head') as HTMLElement;
    let l = document.createElement('link');
    l.rel = 'stylesheet';
    l.type = 'text/css';
    l.href = "s.css"

    links.appendChild(l);
}

function Minigiochi() {
    return(
        <>
            <Navbar />
            <main>
                <p className="font-6 txt-center" style={{marginTop: "10px"}}>Minigiochi</p>

            </main>
        </>
    )    
}