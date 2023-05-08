import React from "react";
import "../css/minigiochi/slots.css";

export default function Slots() {
    document.querySelector("body")?.classList.add("Slots");


    return (
        <>
            <main>
                <h1>Slots</h1>
                <div className="game">
                    <aside>
                        <p>Stats</p>
                    </aside>
                    <section>
                        <div>SLOTS</div>
                        <div>BUTTONS</div>
                    </section>
                </div>
            </main>
        </>
    )
}