import React from "react";
import "../css/minigiochi/slots.css";

export default function Slots() {
    return (
        <>
            <main className="Slots">
                <div className="game">
                    <aside>
                        <div className="slot-records">
                        <Record />
                        <Record />
                        <Record />
                        </div>
                    </aside>
                    <section>
                        <div className="slots"></div>
                        <div className="playbar"></div>
                    </section>
                </div>
            </main>
        </>
    )
}


function Record(){
    let amount = 500;
    return (
        <div className="record">
            <div className="icon"></div>
            <h5 style={{color: "#fff", margin: "0"}}>Player1</h5>
            <p style={{ fontSize: '1rem',fontWeight: 900 , margin: '10px 0' }}>${amount}</p>
        </div>
    )
}