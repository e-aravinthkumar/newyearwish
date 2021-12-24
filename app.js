
let enter = document.querySelector("#enter");

let nameprompt = document.querySelector("#nameprompt");
let content = document.querySelector("#content");
let instruction = document.querySelector("#instruction")
let tamil = document.querySelector("#tamil_wish");
let wish_cont = document.querySelector("#wish");
let wish = [
    "Wishing You a Very Happy New Year.",
    "May the New Year bring you warnth, love, and light to guide your path to a positive destination.",
    "Wishing you a Happy New Year with the hope that you will have many blessing in the year to come.",
    "I wish you a wonderful new year full of plenty, joy and moments of treasure. May 2022 is still your best year!",
    "Hoping this card bring your my sincere greetings, you will be blessed through the coming year in fullest measure.",
    "Let the old year end and the New Year begin with the warmest of aspirations.",
    "You deserve all the best: May all your wishes come true in 2022!",
    "New Year, new start. May all your dreams come true in 2022.",
    "May all your wildest dreams manifest in 2022. You got this!",
    "Cheers to health, happiness, and prosperity in 2022.",
    "Wishing you and yours a happy, healthy, and abundant 2022."
];
let quotes = wish[Math.floor(Math.random()*wish.length)];

enter.addEventListener('click', ()=>{
    let name_container = document.querySelector("#name_container");
    let inputname = document.querySelector("#inputname");
    
    
    wish_cont.innerHTML = quotes;
    name_container.innerHTML = inputname.value;
    nameprompt.classList.add("hidden");
    instruction.classList.add("hidden");
    content.classList.remove("hidden");
    tamil.classList.remove("hidden");
    

});
