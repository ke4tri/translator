const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// was going to use this as a way to change the color of ART but cannot put it in its on class this way
// let concat_word = (word1,word2) => {
//     let word3 = `${word1}+${word2}`;
//     return word3
// };

// const words = {
    spanish = 
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
    
    french = 
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
    
    italian =
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
           
// }

//SET UP THE BELOW FOR THE OTHER TWO LANGS TOO


const divHtml = () => {
    const elmnt = document.createElement("p");
    elmnt.setAttribute("id","dom2")
    const item = document.getElementById("dom");
    item.replaceChild(elmnt, item.childNodes[0]);
};

document.getElementById("SPANISH").addEventListener("click", function(){


    divHtml();

        const x = document.getElementById("inText").value; 
        const xArraySplit = x.split(" ");

        for (var i = 0; i < xArraySplit.length; i++){
            newArray.push(xArraySplit[i]);
        };
  
            
        
        
             
    return printToDom(x, "dom2")
    
});

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_get
// not sure why this way seems so much easier than what I did above
// but also uses the onclick instead of the addEventListener

// if(xArraySplit[i] == words.spanish[0]){
//     y =  words.spanish[0].i;
    
// }