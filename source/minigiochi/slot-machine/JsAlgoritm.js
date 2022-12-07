let cost = 100;
let Coins = 1100;
const SmallIncrement = 500;
const BigIncrement = 2000;
document.getElementById("startButton").innerHTML=("Tenta la fortuna $" + cost);
document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
function smallWin(){
    Coins += SmallIncrement;
    document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
    document.getElementById("amount").innerHTML=("Guadagno: + " + SmallIncrement);
    console.log(1);
}
function Jackpot(){
    Coins += BigIncrement;
    document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
    document.getElementById('amount').innerHTML=("Guadagno: + " + BigIncrement);
    document.getElementById('firstSlot').style.background = "gold";
    document.getElementById('secondSlot').style.background = "gold";
    document.getElementById('thirdSlot').style.background = "gold";
    document.getElementById('fourthSlot').style.background = "gold";
}
function pressStart(){
    Coins -= cost;
    if(Coins <= 0 && (Coins + cost)!=cost){
        Coins = 0;
        document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
        document.getElementById("startButton").innerHTML=("Bancarotta");
        document.getElementById('startButton').style.background = "#f73535";
    }else{
        document.getElementById('firstSlot').style.background = "#dbdbdb";
        document.getElementById('secondSlot').style.background = "#dbdbdb";
        document.getElementById('thirdSlot').style.background = "#dbdbdb";
        document.getElementById('fouthSlot').style.background = "#dbdbdb";
        document.getElementById("coinsCounter").innerHTML=("Money: $" + Coins);
        let valueSlotOne = Math.round( Math.random() * 9);
        document.getElementById("firstSlot").innerHTML=(valueSlotOne);
        let valueSlotTwo = Math.round( Math.random() * 9);
        document.getElementById("secondSlot").innerHTML=(valueSlotTwo);
        let valueSlotThree = Math.round( Math.random() * 9);
        document.getElementById("thirdSlot").innerHTML=(valueSlotThree);
        let valueSlotFour = Math.round( Math.random() * 9);
        document.getElementById("fourthSlot").innerHTML=(valueSlotFour);
        
        if(valueSlotOne == valueSlotTwo && valueSlotTwo == valueSlotThree && valueSlotThree == valueSlotFour){
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
        }else if(valueSlotOne == valueSlotFour){
            win = true;
            winType = 'small';
            smallWin()
        }else if(valueSlotTwo == valueSlotThree){
            win = true;
            winType = 'small';
            smallWin()
        }else if(valueSlotTwo == valueSlotFour){
            win = true;
            winType = 'small';
            smallWin()
        }else if(valueSlotThree == valueSlotFour){
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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
  
const d = randomDate(new Date(2012, 0, 1), new Date());
console.log(d);

document.getElementById("startButton").addEventListener("click", () => {Coins += cost,pressStart()});
