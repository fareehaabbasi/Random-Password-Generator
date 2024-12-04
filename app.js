const passwardBox = document.getElementById("password");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-?/><.,~\|";

const allCharac = upperCase + lowerCase + number + symbol;

function createPasword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allCharac[Math.floor(Math.random() * allCharac.length)];
    }

    passwardBox.value = password;
}

function copyPassword() {
    passwardBox.select();
    document.execCommand("copy");
}

copy.addEventListener("click", function(){
    copyPassword();
});

btn.addEventListener("click", function(){
    createPasword();
});