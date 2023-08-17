let Lks = JSON.parse(localStorage.getItem("Lks"));
let focusGk = "";
let Gks = {Gk1: "", Gk2: "", Gk3: "", Gk4: "", Gk5: "", Gk6: "", Gk7: "", Gk8: "?", Gk9:"?"};


function addGk(){
    const Gk8 = document.getElementById("Gk8");
    const Gk9 = document.getElementById("Gk9");
    if(Gk8.style.display == ""){
        Gk8.style.display = "block";
        return;
    }
    if(Gk9.style.display == ""){
        Gk9.style.display = "block";
        const plusButton = document.getElementById("plus");
        plusButton.style.display = "none";
        return;
    }
    
}

function showGk(Gk){
   const content = document.querySelectorAll(".dropContent Button");

   for(i of content){
    id = i.id;
    if(!Object.values(Lks).includes(id)){
    i.style.display = "inline";
    }
   }

   focusGk = Gk

}

function setGk(fach){
    Gks[focusGk] = fach;

    GkButton = document.getElementById(focusGk);
    GkButton.innerText = fach;
    gewaehltesFach = document.getElementById(fach);
    faecherListe = document.querySelector(".dropContent").children;

    for(i of faecherListe){
        id = i.id;
        if(Object.values(Gks).includes(id)){
            i.innerText = id+ "**"
            i.disabled = true;
        }
        else{
            i.innerText = id;
            i.disabled = false;
        }

    }


    if(!Object.values(Gks).includes("")){
        document.querySelector(".bestaetigen button").style.display = "block"
    }

}
    

function changeWindow(){
    window.location.href = "muendlichesAbiturAuswahl.html"

    Gks = JSON.stringify(Gks);
    localStorage.setItem("Gks", Gks);

}