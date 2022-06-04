let Games = 0;
let SceltaUtente = null;
let Vittorie = 0;
let Sconfitte = 0;
let Pareggi = 0;
let output = "";
let Ratio = 0;
let Score = 0;

const IncrementScore = 20;
const DecrementScore = 10;

function Reset(){
    Games = 0;
    SceltaUtente = null;
    Vittorie = 0;
    Sconfitte = 0;
    Pareggi = 0;
    output = "";
    Ratio = 0;
    Score = 0;
}
function Scelto(){
    var SceltaPc = Math.round(Math.random()*8)+1;
    if (SceltaPc <= 3){
        output = "Sasso";
    }else if (SceltaPc <= 6 && SceltaPc >3){
        output = "Carta";
    }else{
        output = "Forbice";
    }
    document.getElementById("SceltaComputer").innerHTML=("Il computer ha scelto " + output);
    Games++;
    document.getElementById("gamesPlayed").innerHTML=("Partite: " + Games);
}
function Sasso(){
    SceltaUtente = "Sasso";
    if(output == "Carta"){
        Sconfitte++;
        document.getElementById("Looses").innerHTML=("Sconfitte: " + Sconfitte);
        Score = Score - DecrementScore;
        if (Score < 0){
            Score = 0;
        }
        document.getElementById("Score").innerHTML=("Punteggio: " + Score);
    }else if (output == "Forbice"){
        Vittorie++;
        document.getElementById("Wins").innerHTML=("Vittorie: " + Vittorie);
        Score = Score + IncrementScore;
        document.getElementById("Score").innerHTML=("Punteggio: " + Score);
    }else{
        Pareggi++;
        document.getElementById("Draws").innerHTML=("Pareggi: " + Pareggi);
    }
    Ratio = Vittorie / Games;
    Ratio = Ratio.toFixed(2);
    document.getElementById("WinRate").innerHTML=("Win Rate: " + Ratio);
}
function Carta(){
    SceltaUtente = "Carta";
    if(output == "Forbice"){
        Sconfitte++;
        document.getElementById("Looses").innerHTML=("Sconfitte: " + Sconfitte);
        Score = Score - DecrementScore;
        if (Score < 0){
            Score = 0;
        }
        document.getElementById("Score").innerHTML=("Punteggio: " + Score);
    }else if (output == "Sasso"){
        Vittorie++;
        document.getElementById("Wins").innerHTML=("Vittorie: " + Vittorie);
        Score = Score + IncrementScore;
        document.getElementById("Score").innerHTML=("Punteggio: " + Score);
    }else{
        Pareggi++;
        document.getElementById("Draws").innerHTML=("Pareggi: " + Pareggi);
    }
    Ratio = Vittorie / Games;
    Ratio = Ratio.toFixed(2);
    document.getElementById("WinRate").innerHTML=("Win Rate: " + Ratio);
}
function Forbice(){
    SceltaUtente = "Forbice";
    if(output == "Sasso"){
        Sconfitte++;
        document.getElementById("Looses").innerHTML=("Sconfitte: " + Sconfitte);
        Score = Score - DecrementScore;
        if (Score < 0){
            Score = 0;
        }
        document.getElementById("Score").innerHTML=("Punteggio: " + Score);
    }else if (output == "Carta"){
        Vittorie++;
        document.getElementById("Wins").innerHTML=("Vittorie: " + Vittorie);
        Score = Score + IncrementScore;
        document.getElementById("Score").innerHTML=("Punteggio: " + Score);
    }else{
        Pareggi++;
        document.getElementById("Draws").innerHTML=("Pareggi: " + Pareggi);
    }
    Ratio = Vittorie / Games;
    Ratio = Ratio.toFixed(2);
    document.getElementById("WinRate").innerHTML=("Win Rate: " + Ratio);
}
Reset();



