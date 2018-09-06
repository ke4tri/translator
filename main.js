const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// was going to use this as a way to change the color of ART but cannot put it in its on class this way
let concat_word = (word1,word2) => {
    let word3 = `${word1}+${word2}`;
    return word3
};

