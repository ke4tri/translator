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
    },

    french :
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
    }
           
}

const divHtml = () => {
    const elmnt = document.createElement("p");
    elmnt.setAttribute("id","dom2")
    const item = document.getElementById("dom");
    item.replaceChild(elmnt, item.childNodes[0]);
};

document.getElementById("SPANISH").addEventListener("click", function(){

    divHtml();
        let language = '' ;
        newLang = [];
        let x_input = document.getElementById("inText").value; 
        x_input = x_input.toLowerCase();
        let x_Array = x_input.split(" ");
            for (var i=0;i<x_Array.length;i++) {
                newLang.push(words["spanish"][x_Array[i]]);

            }
    return printToDom(x, "dom2")
    
});

