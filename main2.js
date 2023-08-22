let currentLk = "";
let Lks = {Lk1: "", Lk2: "", Lk3: ""};



function setCurrentLk(selectedLk){
    currentLk = selectedLk;
}



function setLk(fach){
    Lks[currentLk] = fach;
    const currLk = document.getElementById(currentLk);
    currLk.innerText = fach;

    if(!Object.values(Lks).includes("")){
        document.querySelector("#bestaetigen button").style.display = "block"
    }

    const LkBtns = document.querySelector("#LkButtons").children;
    for(LkBtn of LkBtns){
        LkBtn.setAttribute("class","");
    }

    switch(currentLk){
        case "Lk1":
            let i = document.getElementById("Lk2");
            setCurrentLk("Lk2");
            i.setAttribute("class","clicked");
            break;
        case "Lk2":
            let j = document.getElementById("Lk3");
            setCurrentLk("Lk3");
            j.setAttribute("class","clicked");
            break;
    }

}
    

function GkAuswahl(){
    window.location.href = "gkAuswahl.html"
    Lks = JSON.stringify(Lks);
    localStorage.setItem("Lks", Lks);
    
}





function setClickedLk(){
    let btn = document.getElementById(currentLk);
    const LkBtns = document.querySelector("#LkButtons").children;
    for(LkBtn of LkBtns){
        LkBtn.setAttribute("class","");
    }
    btn.setAttribute("class","clicked");
}

function setClickedGk(){
    const GkBtns = document.querySelector("#GkButtons").children;
    for(i of GkBtns){
        id = i.id;
        if(Object.values(Lks).includes(id)){
            i.setAttribute("class","clicked");
            i.disabled = true;
        }
        else{
            i.setAttribute("class","");
            i.disabled = false;
        }

    }
    
}