//------variables------
//
//
let wordGame = ["palourde","attribut","bouton","canard"];
let score = 7 ;
let letter = [];
//
//
//------fucntions------
//
//
let choiceComputer = () => {
    let index =  Math.floor(Math.random() * Math.floor(wordGame.length)); // random choiceComputer
    return wordGame[index]
}

let replaceUnderscore = (replace) => {
    for(let i = 0;i<replace.length;i++) {
        if(arrayWordComputer[i] !== letter) {
            replace[i] = "_" + " ";
        }
    }
    return replace
}

let scores = (datascore) => {
    if(arrayWordComputer.includes(letter)) { // score
        return datascore
    }
    else {
        return datascore - 1
    }
}

let addLetterUser = (wordUser) => {
    for(let h = 0;h<wordUser.length;h++) { // transform wordToFind in underscore
        if(arrayWordComputer[h] === letter) {
            wordUser[h] = letter;
        }
    }
    return wordUser
}

let winner = (userWord) => {
    if(userWord.includes("_"+" ")) {
        return true
    }
    else {
        return alert("You win")
    }
}
//
//
//------code------
//
//
let computerWord = choiceComputer(); // computerWord store choiceComputer
console.log(computerWord);

let arrayWordComputer = computerWord.split(""); //  arrayWordComputer compare letters
console.log(arrayWordComputer);

let wordToFind = computerWord.split(""); // wordUser
console.log(wordToFind);

replaceUnderscore(wordToFind); // change letter to underscore

while(score !==0 && winner(wordToFind) === true) {
    letter = prompt("Choose a letter.\nYour score is " + score + "\n" + wordToFind);
    letter = letter.toLowerCase();
    console.log(addLetterUser(wordToFind));
    console.log(winner(wordToFind));
    score = scores(score);
}
