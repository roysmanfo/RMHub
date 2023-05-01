import React, { useState } from "react";
import '../css/minigiochi/SCF.css'

export default function SCF() {

    const [games, setGames] = useState(0);
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [draws, setDraws] = useState(0);
    const [score, setScore] = useState(0);
    const [winRate, setWinRate] = useState(0);
    const [computerChoice, setComputerChoice] = useState("");

    const choices = ["sasso", "carta", "forbice"];

    const handleChoice = (choice: string) => {
        const computerIndex = Math.floor(Math.random() * 3);
        const computerChoice = choices[computerIndex];

        setComputerChoice(computerChoice);
        setGames((games) => games + 1);

        if (choice === "sasso") {
            if (computerChoice === "carta") {
                setLosses((losses) => losses + 1);
                setScore((score) => Math.max(score - 10, 0));
            } else if (computerChoice === "forbice") {
                setWins((wins) => wins + 1);
                setScore((score) => score + 20);
            } else {
                setDraws((draws) => draws + 1);
            }
        } else if (choice === "carta") {
            if (computerChoice === "forbice") {
                setLosses((losses) => losses + 1);
                setScore((score) => Math.max(score - 10, 0));
            } else if (computerChoice === "sasso") {
                setWins((wins) => wins + 1);
                setScore((score) => score + 20);
            } else {
                setDraws((draws) => draws + 1);
            }
        } else if (choice === "forbice") {
            if (computerChoice === "sasso") {
                setLosses((losses) => losses + 1);
                setScore((score) => Math.max(score - 10, 0));
            } else if (computerChoice === "carta") {
                setWins((wins) => wins + 1);
                setScore((score) => score + 20);
            } else {
                setDraws((draws) => draws + 1);
            }
        }
        
        setWinRate(parseFloat((wins / games).toFixed(2)));
    };
    document.querySelector("body")?.classList.add("SCF");
    return (
        <>  
            <h1 style={{ color: '#fff', fontSize: '5rem' }}>SASSO CARTA FORBICE</h1>
            <div className="game">
                <div>
                    <h2 id="SceltaComputer">Il computer ha scelto {computerChoice || "nulla"}</h2>
                    <div className="scelte">
                        <button className="sasso scelta" id="sasso" onClick={() => handleChoice("sasso")}>SASSO</button>
                        <button className="carta scelta" id="carta" onClick={() => handleChoice("carta")}>CARTA</button>
                        <button className="forbice scelta" id="forbice" onClick={() => handleChoice("forbice")}>FORBICE</button>
                    </div>
                </div>
                <div>
                    <div className="stats">
                        <p id="gamesPlayed">Partite: {games}</p>
                        <p id="Score">Punteggio: {score}</p>
                        <p id="Wins">Vittorie: {wins}</p>
                        <p id="Loses">Sconfitte: {losses}</p>
                        <p id="Draws">Pareggi: {draws}</p>
                        <p id="WinRate">Win rate: {winRate || 0}</p>
                    </div>
                </div>
            </div>
        </>
    )
}