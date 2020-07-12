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

let scores = (datascore) => {
    if(arrayWordComputer.includes(letter)) { // score
        return datascore
    }
    else {
        return datascore - 1
    }
}

let addLetterUser = (wordUser) => {
    for(let h = 0;h<wordToFind.length;h++) { // transform wordToFind in underscore
        if(arrayWordComputer[h] !== letter) {
            wordUser[h] = "_" + " ";
        }
        else {
            wordUser[h] = letter; // add letter to wordToFind
        }
    }
    return wordUser
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

while(score > 0 ) {
    addLetterUser(wordToFind);
    letter = prompt("Choose a letter.\nYour score is " + score + "\n" + wordToFind);
    score = scores(score);
}
//
//
//
//------test------
//
//
//alert("your score is " + goodLetter(score) + "\n" + replaceLetter());
/* let replaceLetter = () => {
    for(let j = 0;j<transforms.length;j++) {
        if(arrayComputer[j] === letter) {
            transforms[j] = letter;
        }
    }
    return transforms
}

let replaceUnderscore = () => {
    for(let i = 0;i<transforms.length;i++) {
        if(arrayComputer[i] !== letter) {
            transforms[i] = "_" + " ";
        }
    }
    return transforms
} */