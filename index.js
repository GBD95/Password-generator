const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.querySelector("#generate-btn");
let firstPass = document.querySelector("#first-password");
let seccondPass = document.querySelector("#seccond-password");

let checkNum = document.querySelector("#check-num");
let onlyNumbers = characters.slice(52, 62);

let checkSimb = document.querySelector("#check-simb");
let onlySimbols = characters.slice(62, characters.length);

let onlyLetters = characters.slice(0, 52);



btn.addEventListener('click', getRandomPass);




function getRandomPass() {
    firstPass.textContent = "";
    seccondPass.textContent = "";
    let passwordSize = document.querySelector("#pass-size").value;
    
    if (checkNum.checked == false && checkSimb.checked == false){
        for (let i = 0; i < passwordSize; i++){
            let randomIndex1 = Math.floor(Math.random() * onlyLetters.length)
            firstPass.textContent += onlyLetters[randomIndex1];
        }
    
        for (let j = 0; j < passwordSize; j++){
            let randomIndex2 = Math.floor(Math.random() * onlyLetters.length)
            seccondPass.textContent += onlyLetters[randomIndex2];
        }

    } else if (checkNum.checked == true && checkSimb.checked == false) {
        for (let i = 0; i < passwordSize; i++){
            let randomIndex1 = Math.floor(Math.random() * onlyNumbers.length)
            firstPass.textContent += onlyNumbers[randomIndex1];
        }
    
        for (let j = 0; j < passwordSize; j++){
            let randomIndex2 = Math.floor(Math.random() * onlyNumbers.length)
            seccondPass.textContent += onlyNumbers[randomIndex2];
        }
    } else if (checkNum.checked == false && checkSimb.checked == true) {
        for (let i = 0; i < passwordSize; i++){
            let randomIndex1 = Math.floor(Math.random() * onlySimbols.length)
            firstPass.textContent += onlySimbols[randomIndex1];
        }
    
        for (let j = 0; j < passwordSize; j++){
            let randomIndex2 = Math.floor(Math.random() * onlySimbols.length)
            seccondPass.textContent += onlySimbols[randomIndex2];
        }
    } else {
        for (let i = 0; i < passwordSize; i++){
            let randomIndex1 = Math.floor(Math.random() * characters.length)
            firstPass.textContent += characters[randomIndex1];
        }
    
        for (let j = 0; j < 15; j++){
            let randomIndex2 = Math.floor(Math.random() * characters.length)
            seccondPass.textContent += characters[randomIndex2];
        }
    }
    console.log(passwordSize);
};
