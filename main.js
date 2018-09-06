const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// was going to use this as a way to change the color of ART but cannot put it in its on class this way
let concat_word = (word1,word2) => {
    let word3 = `${word1}+${word2}`;
    return word3
};

const words = {
    spanish : [
    {
    "merry":"alegre",
    "christmas":"navida",
    "and":"y",
    "happy":"contento",
    "new":"nuevo",
    "year":"ano",
    "good":"bueno",
    "lord":"dio",
    "snow":"nieve",
    }
    ],
    French : [
    {
    "merry":"joyeux",
    "christmas":"noel",
    "and":"et",
    "happy":"content",
    "new":"nouveau",
    "year":"an",
    "good":"bien",
    "lord":"seigneur",
    "snow":"neige",
    }
    ],
    Italian : [
    {
    "merry":"buon",
    "christmas":"natale",
    "and":"e",
    "happy":"buon",
    "new":"nuovo",
    "year":"ano",
    "good":"bueno",
    "lord":"signore",
    "snow":"la neve",
    }
    ]        
}