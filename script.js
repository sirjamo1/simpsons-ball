const lisaHands = document.getElementById("lisa-hands");
const ball = document.getElementById("ball");
const eyeOne = document.getElementById("eye-one");
const eyeTwo = document.getElementById("eye-two");
const text = document.getElementById("text-bubble-text");
let dialogue = [
    ["I have a ball. Perhaps you'd like to bounce it?"],[
        "Very good, for a first try"
    ],["Oh! Got away from you, huh? Well, you keep at it."],
];
let dialogueIndex = 1
text.innerHTML = dialogue[0];
ball.classList.add("ballWiggle");
const theDrop = () => {
    console.log("class added");
    ball.classList.add("ballDrop");
    eyeOne.classList.add("eyeDrop");
    eyeTwo.classList.add("eyeDrop");
    setTimeout(() => {
        ball.classList.remove("ballDrop");
        eyeOne.classList.remove("eyeDrop");
        eyeTwo.classList.remove("eyeDrop");
        console.log("class removed");
        text.innerHTML = dialogue[dialogueIndex];
        dialogueIndex = dialogueIndex >= 2 ? 0 : dialogueIndex += 1;
    }, 1500);
};
lisaHands.addEventListener("click", () => theDrop());
