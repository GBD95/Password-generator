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




function displayPasswords(whatisitmadeof){
    firstPass.textContent = "";
    seccondPass.textContent = "";
    let passwordSize = document.querySelector("#pass-size").value;
    
    for (let i = 0; i < passwordSize; i++){
        let randomIndex1 = Math.floor(Math.random() * whatisitmadeof.length)
        let randomIndex2 = Math.floor(Math.random() * whatisitmadeof.length)
        firstPass.textContent += whatisitmadeof[randomIndex1];
        seccondPass.textContent += whatisitmadeof[randomIndex2];
    }
}

function getRandomPass() {
    if (!checkNum.checked && !checkSimb.checked){
        displayPasswords(onlyLetters)
    } else if (checkNum.checked && !checkSimb.checked) {
        displayPasswords(onlyNumbers)
    } else if (!checkNum.checked && checkSimb.checked) {
        displayPasswords(onlySimbols);
    } else {
        displayPasswords(characters);
    }
    console.log(passwordSize);
};
