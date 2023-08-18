const Lks = JSON.parse(localStorage.getItem("Lks"));
let Gks = JSON.parse(localStorage.getItem("Gks"));
const mündlicheAbiturs = JSON.parse(localStorage.getItem("mündlicheAbiturs"));

localStorage.clear


let LkNoten = {};
let AbiturNoten = {};
let GkNoten = {};
let mAbiturHalbjahrNoten = {};
let FacharbeitNote = {};


//starte Lk erstellung
for(let i = 1; i <= Object.keys(Lks).length; i++){
    createLks(Lks["Lk"+i], i);
}


//startet Mündliche Prüfugsfächer erstellung
for(let i = 1; i <= Object.keys(mündlicheAbiturs).length; i++){
    createMündlichesAbiturNotenAuswahl(mündlicheAbiturs["Prüfungsfach" + i], i)
}

console.log(Gks);

//startet Grundkust erstellung
for(let i = 1; i <= Object.keys(Gks).length-1; i++){ //<-- -1 da warum auch immer ein undifined Objekt mit der id Q10 am Ende erstellt wird 
    createGkNotenAuswahl(Gks["Gk" + i], i);
}



//Erstelle Lks
function createLks(fach, LkNr){
    let parent = document.getElementById("LkHalbjahre");
    const h2Element = document.createElement("h2");
    const name = document.createTextNode(fach);
    h2Element.appendChild(name);
    parent.appendChild(h2Element);

    

    for(let i = 1; i <= 4; i++){
    let inputQ = document.createElement("input");
    inputQ.setAttribute("type","number");
    inputQ.setAttribute("min","0");
    inputQ.setAttribute("max","15");
    inputQ.setAttribute("placeholder","Q" + i);
    inputQ.setAttribute("id","Lk"+ LkNr + "Q" + i);
    inputQ.setAttribute("class","LkNote");

    parent.appendChild(inputQ)
    }

    let inputQ = document.createElement("input");
    inputQ.setAttribute("type","number");
    inputQ.setAttribute("min","0");
    inputQ.setAttribute("max","15");
    inputQ.setAttribute("placeholder", "schriftliches Abitur");
    inputQ.setAttribute("class","AbiturNote");
    inputQ.setAttribute("id","Lk" + LkNr + "AbiturNote");

    parent.appendChild(inputQ);
}


//Erstellt die Auswahlfelder und Überschriften der Grundkurse 

function createGkNotenAuswahl(fach, GrundkursNr){
    if(fach === "?"){
        return;
    }

    let parent = document.getElementById("GkHalbjahre");
    const h2Element = document.createElement("h2");
    const name = document.createTextNode(fach);
    h2Element.appendChild(name);
    parent.appendChild(h2Element);

    

    for(let i = 1; i <= 4; i++){
    let inputQ = document.createElement("input");
    inputQ.setAttribute("type","number");
    inputQ.setAttribute("min","0");
    inputQ.setAttribute("max","15");
    inputQ.setAttribute("placeholder","Q" + i);
    inputQ.setAttribute("id","Gk"+ GrundkursNr+ "Q" + i);
    parent.appendChild(inputQ)
    }
}


//Mündlichen Abiturs
function createMündlichesAbiturNotenAuswahl(fach, PrüfungsfachNr){
    if(fach === "keinPrüfungsfach"){
        return;
    }

    let parent = document.getElementById("MündlichesAbitur");   
    Gks[getKeyByValue(Gks, fach)] = "?";
        

    const h2Element = document.createElement("h2");
    const name = document.createTextNode(fach);
    h2Element.appendChild(name);
    parent.appendChild(h2Element);

    

    for(let i = 1; i <= 4; i++){
    let inputQ = document.createElement("input");
    inputQ.setAttribute("type","number");
    inputQ.setAttribute("min","0");
    inputQ.setAttribute("max","15");
    inputQ.setAttribute("placeholder","Q" + i);
    inputQ.setAttribute("id","mAbitur"+ PrüfungsfachNr + "Q" +i);
    parent.appendChild(inputQ)
    }

    
        let inputQ = document.createElement("input");
        inputQ.setAttribute("type","number");
        inputQ.setAttribute("min","0");
        inputQ.setAttribute("max","15");
        inputQ.setAttribute("placeholder", "mündliches Abitur");
        inputQ.setAttribute("id","mündlichesAbitur"+ PrüfungsfachNr +"Note");
        inputQ.setAttribute("class","AbiturNote");
        parent.appendChild(inputQ);
}


//Helfer functionen
function getKeyByValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
}

function getNoten(){
    //Lk Noten
    for(let i = 1; i <= Object.keys(Lks).length; i++){
         for(let j = 1; j <= 4; j++){
        LkNoten[Lks["Lk"+i] + "Q" + j] = document.getElementById("Lk" + i + "Q" + j).value;
        }
    }
    
    //Gk Noten 
    for(let i = 1; i <= Object.keys(Gks).length; i++){
        if(Gks["Gk" + i] === "?"){
            continue
        }

        for(let j = 1; j <= 4; j++){
       GkNoten[Gks['Gk'+ i] + "Q" + j] = document.getElementById("Gk" + i + "Q" + j).value;
       }
   }
   //mAbitur Noten
   for(let i = 1; i <= Object.keys(mündlicheAbiturs).length; i++){
        if(mündlicheAbiturs["Prüfungsfach" + i] === "keinPrüfungsfach"){
            continue;
        }
        for(let j = 1; j <= 4; j++){
            mAbiturHalbjahrNoten[mündlicheAbiturs["Prüfungsfach"+ i] + "Q" + j] = document.getElementById("mAbitur" + i + "Q" + j).value;
            }
   }

   //Facharbeit Note
   FacharbeitNote["FacharbeitNote"] = document.getElementById("FacharbeitNote").value

   //Abitur Noten
   const AbiturFächer = document.querySelectorAll(".AbiturNote");
   for(i of AbiturFächer){
    switch(i.id){
        case "Lk1AbiturNote":
            AbiturNoten[Lks["Lk1"] + "Abitur"] = i.value;
            break;
        case "Lk2AbiturNote":
            AbiturNoten[Lks["Lk2"] + "Abitur"] = i.value;
            break;
        case "Lk3AbiturNote":
            AbiturNoten[Lks["Lk1"] + "Abitur"] = i.value;
            break;
        case "mündlichesAbitur1Note":
            AbiturNoten[mündlicheAbiturs["Prüfungsfach1"] + "Abitur"] = i.value;
            break;
        case "mündlichesAbitur2Note":
            AbiturNoten[mündlicheAbiturs["Prüfungsfach2"] + "Abitur"] = i.value;
            break;
    
    }
   }
   console.log(LkNoten);
   console.log(GkNoten);
   console.log(FacharbeitNote);
   console.log(mAbiturHalbjahrNoten);
   console.log(AbiturNoten);  
}

function genNoten(){
    let inputFelder = document.querySelectorAll("input");
    for(i of inputFelder){
        i.value = Math.ceil(Math.random() * 15);
    }
}



function changeWindow(){
    if(!checkNoten()){
        return;
    }
    localStorage.clear();
    getNoten();
    
    window.location.href = "endNote.html"

    LkNoten = JSON.stringify(LkNoten);
    localStorage.setItem("LkNoten", LkNoten);

    GkNoten = JSON.stringify(GkNoten);
    localStorage.setItem("GkNoten", GkNoten);

    mAbiturHalbjahrNoten = JSON.stringify(mAbiturHalbjahrNoten);
    localStorage.setItem("mündlichesAbiturHalbjahrNoten", mAbiturHalbjahrNoten);

    FacharbeitNote = JSON.stringify(FacharbeitNote);
    localStorage.setItem("FacharbeitNote", FacharbeitNote);

    AbiturNoten = JSON.stringify(AbiturNoten);
    localStorage.setItem("AbiturNoten", AbiturNoten);
}

function checkNoten(){
    inputs = document.querySelectorAll("input");
    let valid = true;
    for(i of inputs){
        if(i.value < 0 || i.value > 15){
            i.style.background = "red";
            valid = false;
        }
        else if(i.value === ""){
            i.style.background = "yellow";
            valid = false;
        }
        else{
            i.style.background = "white";
        }
    }
    return valid;
}