const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// was going to use this as a way to change the color of ART but cannot put it in its on class this way
// let concat_word = (word1,word2) => {
//     let word3 = `${word1}+${word2}`;
//     return word3
// };

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
    french : [
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
    italian : [
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


document.getElementById("SPANISH").addEventListener("click", function(){
    var elmnt = document.createElement("p");
    elmnt.setAttribute("id","dom2")
    var item = document.getElementById("dom");
    item.replaceChild(elmnt, item.childNodes[0]);
    let x = document.getElementById("inText").value;
    return printToDom(x, "dom2")
});



// let translate = () => {
//     console.log('sdf');
//     var text_fun = document.getElementById("inText").value;
    
//     return printToDom(text_fun, 'print_dom');
//   }


//   let content = document.getElementById("");
//   let button = document.getElementById("");

//   button.onclick = function() {
      
//         if(content.className == "open"){
//             //do something
//         }else{
//             //do something else
//         }
//   };
