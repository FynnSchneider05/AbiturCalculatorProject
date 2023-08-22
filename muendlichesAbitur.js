const Lks = JSON.parse(localStorage.getItem("Lks"));
const Gks = JSON.parse(localStorage.getItem("Gks"));
let mündlicheAbiturs = {Prüfungsfach1: "", Prüfungsfach2: "keinPrüfungsfach"}
let currentPfüfungsfach = "";

for(i = 1; i <= Object.keys(Gks).length; i++){
    addGk(Gks["Gk" + i.toString()]);

}

addKeinButton();

function addKeinButton(){
    const parent = document.getElementById("GkAuswahl");
    const button = document.createElement("button");
    const text = document.createTextNode("/");
    button.setAttribute("id","keinPrüfungsfach");
    button.setAttribute("onclick","setPrüfungsfach('keinPrüfungsfach')");
    button.appendChild(text);
    parent.appendChild(button);

}


 function addGk(Gk){
    if(Gks["Gk"+i.toString()] === "?"){
        return;
    }
    const parent = document.getElementById("GkAuswahl");
    const button = document.createElement("button");
    const text = document.createTextNode(Gk);
    button.setAttribute("id",Gk);
    button.setAttribute("onclick","setPrüfungsfach('" + Gk + "')");
    button.appendChild(text);
    parent.appendChild(button);
 }

 function setPrüfungsfach(fach){
    mündlicheAbiturs[currentPfüfungsfach] = fach;

    const PrüfungsfachButton = document.getElementById(currentPfüfungsfach);

    if(fach == "keinPrüfungsfach"){
        PrüfungsfachButton.innerText = "/";
    }
    else{
    PrüfungsfachButton.innerText = fach;
    }

    fächerAuswahl = document.getElementById("GkAuswahl").children;

    for(i of fächerAuswahl){
        id = i.id;
        if(id == "keinPrüfungsfach"){
            continue;
        }


        if(Object.values(mündlicheAbiturs).includes(id)){
            i.innerText = id+ "**"
            i.disabled = true;
        }
        else{
            i.innerText = id;
            i.disabled = false;
        }
    }

    if(mündlicheAbiturs['Prüfungsfach1'] != ""){
        document.querySelector("#bestätigen").style.display = "block"
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
