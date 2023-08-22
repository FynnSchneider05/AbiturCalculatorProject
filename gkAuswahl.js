let Lks = JSON.parse(localStorage.getItem("Lks"));
let focusGk = "";
let Gks = {Gk1: "", Gk2: "", Gk3: "", Gk4: "", Gk5: "", Gk6: "", Gk7: "", Gk8: "?", Gk9:"?"};


showGk();

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

function showGk(){
   const content = document.querySelectorAll("#FachButtons Button");

   for(i of content){
    id = i.id;
    if(!Object.values(Lks).includes(id)){
    i.style.display = "inline";
    }
   }

}

function setCurrentGk(Gk){
    focusGk = Gk;
}

function setGk(fach){
    Gks[focusGk] = fach;

    GkButton = document.getElementById(focusGk);
    GkButton.innerText = fach;
    
    if(!Object.values(Gks).includes("")){
        document.querySelector(".bestaetigen button").style.display = "block"
    }

    const GkBtns = document.querySelector("#GkButtons").children;
    for(GkBtn of GkBtns){
        GkBtn.setAttribute("class","");
        
        if(Gks[GkBtn.id] != ""){
            GkBtn.style.background = "#7c1212";
            GkBtn.style.color = "white";
        }
    }




    switch(focusGk){
        case "Gk1":
            let a = document.getElementById("Gk2");
            setCurrentGk("Gk2");
            a.setAttribute("class","clicked");
            break;
        case "Gk2":
            let b = document.getElementById("Gk3");
            setCurrentGk("Gk3");
            b.setAttribute("class","clicked");
            break;
        case "Gk3":
            let c = document.getElementById("Gk4");
            setCurrentGk("Gk4");
            c.setAttribute("class","clicked");
            break;
         case "Gk4":
            let d = document.getElementById("Gk5");
            setCurrentGk("Gk5");
            d.setAttribute("class","clicked");
            break;
        case "Gk5":
            let e = document.getElementById("Gk6");
            setCurrentGk("Gk6");
            e.setAttribute("class","clicked");
            break;
        case "Gk6":
            let f = document.getElementById("Gk7");
            setCurrentGk("Gk7");
            f.setAttribute("class","clicked");
            break;

    }

}
    

function changeWindow(){
    window.location.href = "muendlichesAbiturAuswahl.html"

    Gks = JSON.stringify(Gks);
    localStorage.setItem("Gks", Gks);

}


function setClickedGk(){
    let btn = document.getElementById(focusGk);
    const GkBtns = document.querySelector("#GkButtons").children;
    for(GkBtn of GkBtns){
        GkBtn.setAttribute("class","");
    }
    btn.setAttribute("class","clicked");
}

function setClickedFach(){
    console.log("jippi")
    const GkBtns = document.querySelector("#FachButtons").children;
    for(i of GkBtns){
        if(Object.values(Gks).includes(i.id)){
            i.setAttribute("class","clicked");
            i.disabled = true;
        }
        else{
            i.setAttribute("class","");
            i.disabled = false;
        }

    }
    
}