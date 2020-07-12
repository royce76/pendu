//------variables------
//
//
let wordGame = ["palourde","attribut","bouton","canard"];
let score = 7 ;
let letterChooseByUser = [];
//
//
//------fucntions------
//
//
let choiceComputer = () => {
    let index =  Math.floor(Math.random() * Math.floor(wordGame.length)); // random choiceComputer
    return wordGame[index]
}

let replaceByUnderscore = (replace) => {
    for(let i = 0;i<replace.length;i++) {
        if(ComputerWordInArray[i] !== letterChooseByUser) {
            replace[i] = "_" + " ";
        }
    }
    return replace
}

let computeScores = (datascore) => {
    if(ComputerWordInArray.includes(letterChooseByUser)) { // score
        return datascore
    }
    else {
        return datascore - 1
    }
}

let addLetterUser = (wordUser) => {
    for(let h = 0;h<wordUser.length;h++) { // transform wordToFind in underscore
        if(ComputerWordInArray[h] === letterChooseByUser) {
            wordUser[h] = letterChooseByUser;
        }
    }
    return wordUser
}

let restOfUnderscore = (userWord) => {
    if(userWord.includes("_"+" ")) {
        return true
    }
}
//
//
//------code------
//
//
let computerWord = choiceComputer(); // computerWord store choiceComputer
console.log(computerWord);
let ComputerWordInArray = computerWord.split(""); //  arrayWordComputer compare letters
let wordToFind = computerWord.split(""); // wordUser
replaceByUnderscore(wordToFind); // change letter to underscore

while(score !==0 && restOfUnderscore(wordToFind) === true) {
    letterChooseByUser = prompt("Choose a letter.\nYour score is " + score + "\n" + wordToFind);
    letterChooseByUser = letterChooseByUser.toLowerCase();
    addLetterUser(wordToFind);
    restOfUnderscore(wordToFind); 
    score = computeScores(score);
    if(score === 0) {
        alert("you loose")
    }
    else if (restOfUnderscore(wordToFind) !== true) {
        alert("you win")
    }
}
