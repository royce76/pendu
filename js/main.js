//------variables------
//
//
let wordGame = ["palourde","attribut","bouton","canard"];
let score = 7;
let letterChooseByUser = [];
//
//
//------functions------
//
//
let reinitialisationVariables = () => {
    wordGame = ["palourde","attribut","bouton","canard"];
    score = 7;
    letterChooseByUser = [];
}

let menuHangman = () => {
    reinitialisationVariables();
    let saisie = prompt("Menu :\n" + "p : play the game\n" + "r : rules\n" + "e : exit the game");
    menuChoiceUser(saisie);
    return;
}

let menuChoiceUser = (entryUserChoice) => {
    if (entryUserChoice === "p") {
        playThisGame();
        return;
    }
    else if (entryUserChoice === "r") {
        alert("Pour jouer,\nil faut trouver le bon mot !\nA vous de jouer...");
        menuHangman();
        return;
    } 
    else if (entryUserChoice === "e") {
        alert("Bye bye !");
        return;
    }
    else {
        alert("Mauvais choix,\nEssayez encore !");
        menuHangman();
        return;
    }
}

let playThisGame = () => {
    while(score !== 0 && restOfUnderscore(wordToFind) === true) {
        letterChooseByUser = prompt("Choose a letter.\nYour score is " + score + "\n" + wordToFind);
        letterChooseByUser = letterChooseByUser.toLowerCase();
        sizeLetterUser(letterChooseByUser);
        addLetterUser(wordToFind);
        restOfUnderscore(wordToFind); 
        score = computeScores(score);
        if(score === 0) {
            alert("you loose");
            menuHangman();
            return;
        }
        else if (restOfUnderscore(wordToFind) !== true) {
            alert("you win");
            menuHangman();
            return;
        }
    }
    
    alert("oh non :'(")
}
let sizeLetterUser = (letterUserEntry) => {
    if (letterUserEntry.length !== 1) {
        alert("Please, choose one letter, you keep your last score");
    }
}

let choiceComputer = () => {
    let index =  Math.floor(Math.random() * Math.floor(wordGame.length)); // random choiceComputer
    return wordGame[index];
}

let replaceByUnderscore = (replace) => {
    for(let i = 0;i<replace.length;i++) {
        if(computerWordInArray[i] !== letterChooseByUser) {
            replace[i] = "_" + " ";
        }
    }
    return replace;
}

let computeScores = (datascore) => {
    if(computerWordInArray.includes(letterChooseByUser)) { // score
        return datascore;
    }
    else if(letterChooseByUser.length !== 1) {
        return datascore;
    }
    else {
        return datascore - 1;
    }
}

let addLetterUser = (wordUser) => {
    for(let h = 0;h<wordUser.length;h++) { // transform wordToFind in underscore
        if(computerWordInArray[h] === letterChooseByUser) {
            wordUser[h] = letterChooseByUser;
        }
    }
    return wordUser;
}

let restOfUnderscore = (userWord) => {
    if(userWord.includes("_"+" ")) {
        return true;
    }
}
//
//
//------code------
//
//
let computerWord = choiceComputer(); // computerWord store choiceComputer
//console.log(computerWord);

let computerWordInArray = computerWord.split(""); //  arrayWordComputer compare letters
//console.log(arrayWordComputer);

let wordToFind = computerWord.split(""); // wordUser
//console.log(wordToFind);

replaceByUnderscore(wordToFind); // change letter to underscore
menuHangman();
