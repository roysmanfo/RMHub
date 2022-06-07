let Password = '';

function generatePassword(iLen) {
    let Output = '';
    let Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz:;!.,-";
    for (let i = 0; i < iLen; i++) {
        let randomPoz = Math.floor(Math.random() * Chars.length);
        Output += Chars.substring(randomPoz, randomPoz + 1);
    }
    return Output;
}

function newPassword(){
    let len = document.getElementById("PasswordLeght").value;
    if(len < 1){
            document.getElementById("PasswordLeght").value = 1;
            len = 1;
    }
  
    
    if (len === null || len === ''){
        Password = '';
        document.getElementById("PasswordDisplayer").innerHTML=("Password generata: " + Password);
    }
    if(len <= 100){
        
        Password = generatePassword(len);
        document.getElementById("PasswordDisplayer").innerHTML=("Password generata: " + Password);
        document.getElementById("allertText").style.display = "none";
    }else{
        document.getElementById("PasswordDisplayer").innerHTML=("Password troppo lunga");
        document.getElementById("PasswordLeght").value = 64;
        document.getElementById("PasswordLeght").focus();
        document.getElementById("allertText").style.display = "block";
    }

}

