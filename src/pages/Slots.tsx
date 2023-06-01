import React from "react";
import "../css/minigiochi/slots.css";

export default function Slots() {
    return (
        <>
            <main className="Slots">
                <div className="game">
                    <aside>
                        <h1>Latest Big Wins</h1>
                        <div className="slot-records">
                            <Record username={"Player1"} amount={6500} />
                            <Record username={"Player2"} amount={1565} />
                            <Record username={"Player3"} amount={4000} />
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


function Record({username= "", amount=0}){
    // let amount = 500;
    return (
        <div className="record">
            <div className="icon"></div>
            <h5>{username}</h5>
            <p>${amount}</p>
        </div>
    )
}