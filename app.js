const randomAnimalsNames = ["Dog", "Cat", "Lion", "Rat", "Tiger", "Bear", "Monkey", "Wolf", "Fox", "Pig", "Cow", "Goat", "Horse", "Donkey", "Camel", "Zebra", "Elk", "Bison", "Panther", "Mole", "Duck", "Snake", "Pony"]

let totalChances = 0;

const hangStandChildren = document.querySelector(".hangstand").children

for (let index = 0; index < hangStandChildren.length; index++) {

const element = hangStandChildren[index]

element.classList.add("display-none")
}

let randomAnimalName = null

const getRandomNumber = (min, max) => {
return Math.trunc(Math.random() * (max - min) + min)
}

const giveMeButtonsOnScreen = () => {
const rootEl = document.querySelector(".buttons-parent")

let buttonsDataArray = Array(26).fill(null)

let i = 65;

buttonsDataArray = buttonsDataArray.map((value) => {
return String.fromCharCode(i++)
});

buttonsDataArray.forEach((el) => {
const btn = document.createElement("button")
btn.textContent = el;
rootEl.appendChild(btn)
});
}

const chooseRandomAnimalName=() => {

const blankParentEl = document.querySelector(".blanks_parent")

const randomNumber = getRandomNumber(0, randomAnimalsNames.length)

randomAnimalName = randomAnimalsNames[randomNumber].toUpperCase()

for (let index = 0; index < randomAnimalName.length; index++) {

const letter = randomAnimalName[index]

const alpha = document.createElement("p")

const para = document.createElement("span")

para.textContent = letter;

alpha.appendChild(para)

blankParentEl.appendChild(alpha)
}
}

giveMeButtonsOnScreen()
chooseRandomAnimalName()

const buttonsParentEl = document.querySelector(".buttons-parent")

let checkStatusGlobal = 0;

const buttonParentClickFunction = (e) => {

let checkStatus = 0;

if (e.target.textContent.length === 1) {
const letterClicked = e.target.textContent

console.log(randomAnimalName)

const allLettersEls = document.getElementsByTagName("span")

for (let index = 0; index < allLettersEls.length; index++) {
const spanEl = allLettersEls[index]

if (letterClicked == spanEl.textContent) {

spanEl.parentElement.textContent = letterClicked

checkStatus++
checkStatusGlobal++
}
}

if (checkStatus != 0) {
e.target.classList.add("greenBtn")
} else {
totalChances++;
const elementToRemoveClass = document.querySelector(`.class-${totalChances}`)
elementToRemoveClass.classList.remove("display-none")
e.target.classList.add("redBtn")
}

e.target.setAttribute("disabled", "disabled")
}

if (totalChances == 10) {
alert("You Lost the Game")
location.reload()
}

if (checkStatusGlobal == randomAnimalName.length) {
alert("You won the Game")
location.reload()
}
};

buttonsParentEl.addEventListener("click", buttonParentClickFunction)