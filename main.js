const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const words = {
    spanish : 
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
    "santa":"Santa",
    "have":"tener",
    },
    french :
    {
    "merry":"joyeux",
    "christmas":"Noel",
    "and":"et",
    "happy":"content",
    "new":"nouveau",
    "year":"an",
    "good":"bien",
    "lord":"seigneur",
    "snow":"neige",
    "tree":"arbre",
    "santa":"Père Noël",
    "have":"avoir",
    },
    italian :
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
    "tree":"albero",
    "santa":"Santa",
    "have":"avere",
    }  
}

const divHtml = () => {
    const elmnt = document.createElement("p");
    elmnt.setAttribute("id","dom2")
    const item = document.getElementById("dom");
    item.replaceChild(elmnt, item.childNodes[0]);
};

let translate = (language1) => {
        divHtml();
            let language = '' ;
            newLang = [];
            let x_input = document.getElementById("inText").value; 
            x_input = x_input.toLowerCase();
            let x_Array = x_input.split(" ");
                for (var i=0;i<x_Array.length;i++) {
                  let move =  newLang.push(words[language1][x_Array[i]]);
                    if(x_Array[i] in words[language1] === false){
                        alert("You may have not used the correct wording");
                    };
                }
                newLang = newLang.toString();
                newLang = newLang.replace(/,/g, ' ');
                newLang = newLang.charAt(0).toUpperCase() + newLang.slice(1) ;
                // BELOW TO LINES OF CODE ARE THE TEXT TO SPEECH. 
                //http://www.lingoes.net/en/translator/langcode.htm use for the dialect
                var msg = new SpeechSynthesisUtterance(newLang);
                window.speechSynthesis.speak(msg);
        return printToDom(newLang, "dom2")
        
};

document.getElementById("SPANISH").addEventListener("click", function(){
    translate("spanish");
});

document.getElementById("FRENCH").addEventListener("click", function(){
    translate("french");
});

document.getElementById("ITALIAN").addEventListener("click", function(){
    translate("italian");
});

document.getElementById("LUCKY").addEventListener("click", function(){
    let langs = ['spanish','french','italian'];
    let ranNum = Math.floor((Math.random() * 3) + 0);
    let pause = '';
    translate(langs[ranNum]);
});

