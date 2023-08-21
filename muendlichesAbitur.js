const Lks = JSON.parse(localStorage.getItem("Lks"));
const Gks = JSON.parse(localStorage.getItem("Gks"));
let mündlicheAbiturs = {Prüfungsfach1: "", Prüfungsfach2: ""}
let currentPfüfungsfach = "";

for(i = 1; i <= Object.keys(Gks).length; i++){
    addGk(Gks["Gk" + i.toString()]);

}

addKeinButton();

function addKeinButton(){
    const parent = document.getElementById("FachButtons");
    const button = document.createElement("button");
    const text = document.createTextNode("Kein 2. Prüfungsfach");
    button.setAttribute("id","keinPrüfungsfach");
    button.setAttribute("onclick","setPrüfungsfach('keinPrüfungsfach'); setClickedFach()");
    button.appendChild(text);
    parent.appendChild(button);
}


 function addGk(Gk){
    if(Gks["Gk"+i.toString()] === "?"){
        return;
    }
    const parent = document.getElementById("FachButtons");
    const button = document.createElement("button");
    const text = document.createTextNode(Gk);
    button.setAttribute("id",Gk);
    button.setAttribute("onclick","setPrüfungsfach('" + Gk + "'); setClickedFach()");
    button.appendChild(text);
    parent.appendChild(button);
 }

 function setPrüfungsfach(fach){
    mündlicheAbiturs[currentPfüfungsfach] = fach;

    const PrüfungsfachButton = document.getElementById(currentPfüfungsfach);

    if(fach == "keinPrüfungsfach"){
        PrüfungsfachButton.innerText = "Kein 2. Prüfungsfach";
    }
    else{
    PrüfungsfachButton.innerText = fach;
    }

    fächerAuswahl = document.getElementById("FachButtons").children;

    for(i of fächerAuswahl){
        id = i.id;
        if(id == "keinPrüfungsfach"){
            continue;
        }


    }

    if(!Object.values(mündlicheAbiturs).includes("")){
        document.querySelector("#bestätigen button").style.display = "block"
    }


    const PrüfungsButtons = document.querySelector("#PrüfungsfachButtons").children;
    for(Btn of PrüfungsButtons){

        if(mündlicheAbiturs[Btn.id] != ""){
            Btn.setAttribute("class", "")
            Btn.style.background = "#7c1212";
            Btn.style.color = "white";
        }
    }



    if(currentPfüfungsfach == "Prüfungsfach1" && mündlicheAbiturs["Prüfungsfach2"] == ""){
            let a = document.getElementById("Prüfungsfach2");
            setCurrentPrüfungsfach("Prüfungsfach2");
            a.setAttribute("class","clicked");
            
    }

 }

 function setCurrentPrüfungsfach(Prüfungsfach){
    currentPfüfungsfach = Prüfungsfach;
    const keinPrüfungsfachButton = document.getElementById("keinPrüfungsfach");
    if(Prüfungsfach == "Prüfungsfach1"){
        keinPrüfungsfachButton.style.display = "none";
    }
    else{
        keinPrüfungsfachButton.style.display = "inline";
    }
 }


 function changeWindow(){
    window.location.href = "notenAuswahl.html"
    mündlicheAbiturs = JSON.stringify(mündlicheAbiturs);
    localStorage.setItem("mündlicheAbiturs", mündlicheAbiturs);

}


function setClickedPrüfungsfach(){
    let btn = document.getElementById(currentPfüfungsfach);
    const PrüfungsfachBtns = document.querySelector("#PrüfungsfachButtons").children;
    for(pBtn of PrüfungsfachBtns){
        pBtn.setAttribute("class","");
    }
    btn.setAttribute("class","clicked");
}

function setClickedFach(){
    const GkBtns = document.querySelector("#FachButtons").children;
    for(i of GkBtns){
        if(Object.values(mündlicheAbiturs).includes(i.id)){
            i.setAttribute("class","clicked");
            i.disabled = true;
        }
        else{
            i.setAttribute("class","");
            i.disabled = false;
        }

    }
    
}