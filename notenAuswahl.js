let Lks = JSON.parse(localStorage.getItem("Lks"));
let Gks = JSON.parse(localStorage.getItem("Gks"));
let mündlicheAbiturs = JSON.parse(localStorage.getItem("mündlicheAbiturs"));


let LkNoten = {};
let AbiturNoten = {};
let GkNoten = {};
let mAbiturHalbjahrNoten = {};
let FacharbeitNote = {};

ladeSeite();

function ladeSeite(){


//starte Lk erstellung
for(let i = 1; i <= Object.keys(Lks).length; i++){
    createLks(Lks["Lk"+i], i);
}


//startet Mündliche Prüfugsfächer erstellung
for(let i = 1; i <= Object.keys(mündlicheAbiturs).length; i++){
    createMündlichesAbiturNotenAuswahl(mündlicheAbiturs["Prüfungsfach" + i], i)
}


//startet Grundkust erstellung
for(let i = 1; i <= Object.keys(Gks).length-1; i++){ //<-- -1 da warum auch immer ein undifined Objekt mit der id Q10 am Ende erstellt wird 
    createGkNotenAuswahl(Gks["Gk" + i], i);
}

identifyMusikKunst();

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
    for(let i = 1; i <= Object.keys(Gks).length-1; i++){
        if(Gks["Gk" + i] === "?"){
            continue
        }

        for(let j = 1; j <= 4; j++){
            console.log('Gk'+i+'Q'+j);
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
            AbiturNoten[Lks["Lk3"] + "Abitur"] = i.value;
            break;
        case "mündlichesAbitur1Note":
            AbiturNoten[mündlicheAbiturs["Prüfungsfach1"] + "Abitur"] = i.value;
            break;
        case "mündlichesAbitur2Note":
            AbiturNoten[mündlicheAbiturs["Prüfungsfach2"] + "Abitur"] = i.value;
            break;
    
    }
   }
   
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

    getNoten();
    
    window.location.href = 'endNote.html' //"https://www.gutefrage.net/frage/ich-glaube-ich-bin-dumm-wie-kann-ich-lernen-damit-umzugehen"

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
            i.style.background = "yellow";
            valid = false;

            if(i.classList.contains('MusikQ4')){
                i.value = -1;
                valid = true;
            }
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


function identifyMusikKunst(){
    let h2s = document.querySelectorAll('h2');

    h2s.forEach((h2) =>{
        if(h2.innerText == 'Musik' || h2.innerText == 'Kunst'){
            let inputQ4 = h2.nextSibling.nextSibling.nextSibling.nextSibling;
            inputQ4.classList.add('MusikQ4');    
    }
})
}



//personal tests
function fillWith15(){
    let inputF = document.querySelectorAll('input');
    inputF.forEach(input =>{
        input.value = 15;
    })
}

function fillWithMe(){
    Lks = {Lk1: 'Mathematik', Lk2: 'Physik', Lk3: 'Erdkunde'}
    Gks = {Gk1: 'Englisch', Gk2: '?', Gk3: '?', Gk4: 'Chemie', Gk5: 'Geschichte', Gk6: 'Musik', Gk7: 'Religion', Gk8: 'Sport'}
    mündlicheAbiturs = {Prüfungsfach1: 'Deutsch', Prüfungsfach2: 'Informatik'};
    Lks = JSON.stringify(Lks)
    Gks = JSON.stringify(Gks)
    mündlicheAbiturs = JSON.stringify(mündlicheAbiturs)
    localStorage.setItem("mündlicheAbiturs", mündlicheAbiturs);
    localStorage.setItem("Lks", Lks);
    localStorage.setItem("Gks", Gks);
    window.location.reload()
    
}



function meineNotenauffüllen(){
    let inputF = document.querySelectorAll('input');
    let meineNoten = [14, 14, 14, -1, -1, 12, 11, 12,-1,-1, 12, 12, 13, -1, -1, 15,15,15,-1,-1,12,14,14,-1,-1,12,12,13,-1,12,12,13,-1,11,11,12,-1,6,9,8,-1,12,13,14,-1,14,12,14,-1,15]
    for(let i = 0; i < inputF.length; i++){
        inputF[i].value = meineNoten[i];
    }
}
