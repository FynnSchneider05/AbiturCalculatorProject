let currentLk = "";
let Lks = {Lk1: "", Lk2: "", Lk3: ""};



function setCurrentLk(selectedLk){
    currentLk = selectedLk;
}



function setLk(fach){
    if(currentLk == ""){
        return;
    }

    Lks[currentLk] = fach;
    const currLk = document.getElementById(currentLk);
    currLk.innerText = fach;

    if(!Object.values(Lks).includes("")){
        document.querySelector("#bestaetigen button").style.display = "block"
    }

    const LkBtns = document.querySelector("#LkButtons").children;
    for(LkBtn of LkBtns){
        LkBtn.setAttribute("class","");
        
        if(Lks[LkBtn.id] != ""){
            LkBtn.style.background = "#7c1212";
            LkBtn.style.color = "white";
        }

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
    const GkBtns = document.querySelector("#FachButtons").children;
    for(i of GkBtns){
        if(Object.values(Lks).includes(i.id)){
            i.setAttribute("class","clicked");
            i.disabled = true;
        }
        else{
            i.setAttribute("class","");
            i.disabled = false;
        }

    }
    
}