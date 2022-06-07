let cost = 100;
let Coins = 1000;
const SmallIncrement = 500;
const BigIncrement = 2000;
document.getElementById("startButton").innerHTML=("Tenta la fortuna $" + cost);
document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
function smallWin(){
    Coins += SmallIncrement;
    document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
    document.getElementById("amount").innerHTML=("Guadagno: + " + SmallIncrement);
    
}
function Jackpot(){
    Coins += BigIncrement;
    document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
    document.getElementById('amount').innerHTML=("Guadagno: + " + BigIncrement);
    document.getElementById('firstSlot').style.background = "gold";
    document.getElementById('secondSlot').style.background = "gold";
    document.getElementById('thirdSlot').style.background = "gold";
}
function pressStart(){
    Coins -= cost;
    if(Coins <= 0){
        Coins = 0;
        document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
        document.getElementById("startButton").innerHTML=("Bancarotta");
        document.getElementById('startButton').style.background = "#f73535";
    }else{
        document.getElementById('firstSlot').style.background = "#dbdbdb";
        document.getElementById('secondSlot').style.background = "#dbdbdb";
        document.getElementById('thirdSlot').style.background = "#dbdbdb";
        document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
        let valueSlotOne = Math.round( Math.random() * 9);
        document.getElementById("firstSlot").innerHTML=(valueSlotOne);
        let valueSlotTwo = Math.round( Math.random() * 9);
        document.getElementById("secondSlot").innerHTML=(valueSlotTwo);
        let valueSlotThree = Math.round( Math.random() * 9);
        document.getElementById("thirdSlot").innerHTML=(valueSlotThree);
        
        if(valueSlotOne == valueSlotTwo && valueSlotTwo == valueSlotThree){
            win = true;
            winType = 'Jackpot';
            Jackpot()
        }else if(valueSlotOne == valueSlotTwo){
            win = true;
            winType = 'small';
            smallWin()
        }else if(valueSlotOne == valueSlotThree){
            win = true;
            winType = 'small';
            smallWin()
        }else if(valueSlotTwo == valueSlotThree){
            win = true;
            winType = 'small';
            smallWin()
        }else{
            win = false;
            winType = null;
            document.getElementById("amount").innerHTML=("Guadagno: - 100");
        }
    }
}