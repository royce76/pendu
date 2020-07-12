//------variables------
//
//
let wordGame = ["palourde","attribut","bouton","canard"];
let score = 7 ;
let letterChooseByUser = [];
let entryChoiceUser = "";
//
//
//------fucntions------
//
//
let menuHangman = () => {
    return prompt("Menu :\n" + "p : play the game\n" + "r : rules\n" + "e : exit the game");
}
let menuChoiceUser = (EntryUserChoice) =>{
    if (EntryUserChoice === "p"){
        return playThisGame();
    }
    else if (entryChoiceUser === "r"){
        return showrules();
    }
    else if (entryChoiceUser === "e"){
        return false
    }
    else {
        return alert("wrong choice");
    }
}

let playThisGame = () => {
    while(score !==0 && restOfUnderscore(wordToFind) === true) {
        letterChooseByUser = prompt("Choose a letter.\nYour score is " + score + "\n" + wordToFind);
        letterChooseByUser = letterChooseByUser.toLowerCase();
        sizeLetterUser(letterChooseByUser);
        addLetterUser(wordToFind);
        restOfUnderscore(wordToFind); 
        score = computeScores(score);
        if(score === 0) {
            alert("you loose");
        }
        else if (restOfUnderscore(wordToFind) !== true) {
            alert("you win");
        }
    }
}

let sizeLetterUser = (letterUserEntry) => {
    if (letterUserEntry.length !== 1){
        alert("Please, choose one letter, you keep your last score");
    }
}

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
    else if(letterChooseByUser.length !== 1){
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
//console.log(arrayWordComputer);

let wordToFind = computerWord.split(""); // wordUser
//console.log(wordToFind);

replaceByUnderscore(wordToFind); // change letter to underscore
entryChoiceUser= menuHangman();
console.log(entryChoiceUser);
while(entryChoiceUser !== "p" && entryChoiceUser !== "r" && entryChoiceUser !== "e") {
    menuChoiceUser(entryChoiceUser);
}
 
