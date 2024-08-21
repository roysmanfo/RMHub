import React, { useState } from "react";
import "../css/minigiochi/slots.scss";

export default function Slots() {
    const [bet, setBet] = useState(100);
    const [shownBet, setShownBet] = useState(`$${bet}`);


    function update(action: string): void{
        action === "+" ? setBet(bet + 100) : (bet > 100 ? setBet(bet - 100) : setBet(bet));
        if(bet >= 1000){
            setShownBet(`$${(bet / 1000).toFixed(1)}k`);
        }
        else{
            setShownBet(`$${bet}`);
        }
    }

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
                            <Record username={"Player4"} amount={1600} />
                            <Record username={"Player5"} amount={1000} />
                            <Record username={"Player6"} amount={2300} />
                            <Record username={"Player7"} amount={8250} />
                            <Record username={"Player8"} amount={6493} />
                            <Record username={"Player9"} amount={2354} />
                            <Record username={"Player10"} amount={500} />
                        </div>
                    </aside>
                    <section>
                        <div className="slots"></div>
                        <div className="playbar">
                            <div className="money">
                                <div className="win">Win</div>
                                <div className="owned">Owned</div>
                            </div>
                        <div className="bet">
                            <input type="text" value={shownBet} />
                            <button className="decrease" onClick={ () => update("-")}>-</button>
                            <button className="increase" onClick={ () => update("+")}>+</button>
                        </div>
                        <button className="play">Play</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}


function Record({username= "", amount=0}){
    return (
        <div className="record">
            <div className="icon"></div>
            <h5>{username}</h5>
            <p>${amount}</p>
        </div>
    )
}