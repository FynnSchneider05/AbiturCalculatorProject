let currentLk = "";
let Lks = {Lk1: "", Lk2: "", Lk3: ""};



function setCurrentLk(selectedLk){
    currentLk = selectedLk;
}



function setLk(fach){
    Lks[currentLk] = fach;

    LkButton = document.getElementById(currentLk);
    LkButton.innerText = fach;
    gewsehltesFach = document.getElementById(fach);
    fächerListe = document.querySelector("#dropContent").children;

    for(i of fächerListe){
        id = i.id;
        if(Object.values(Lks).includes(id)){
            i.innerText = id+ "**"
            i.disabled = true;
        }
        else{
            i.innerText = id;
            i.disabled = false;
        }

    }


    if(!Object.values(Lks).includes("")){
        document.querySelector(".bestaetigen button").style.display = "block"
    }

}
    

function GkAuswahl(){
    window.location.href = "gkAuswahl.html"
    Lks = JSON.stringify(Lks);
    localStorage.setItem("Lks", Lks);
    
}





