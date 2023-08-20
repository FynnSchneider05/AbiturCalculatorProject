LkNoten = JSON.parse(localStorage.getItem("LkNoten"));

GkNoten = JSON.parse(localStorage.getItem("GkNoten"));

mAbiturHalbjahrNoten = JSON.parse(localStorage.getItem("mündlichesAbiturHalbjahrNoten"));

FacharbeitNote = JSON.parse(localStorage.getItem("FacharbeitNote"));

AbiturNoten = JSON.parse(localStorage.getItem("AbiturNoten"));



//Berechnung der Noten
const NaturwissenschafteFächer = ["Mathematik", "Informatik", "Chemie", "Physik", "Biologie"];
const GesellschaftswissenschafteFächer = ["Erdkunde", "Geschichte", "Sozialkunde"];
const KünstlericheFächer = ["Kunst", "Musik", "Darstellendes Spiel"];
const Sprachen = ["Englisch", "Deutsch", "Französisch", "Französisch", "Latein"];
const SonstigeFächer = ["Sport", "Religion"];

let naturwissenschaften = [];
let gesellschaftswissenschaften = [];
let künstlerisch = [];
let sprachen = [];
let sonstiges = []; // ende hat gefehlt

for(fach of NaturwissenschafteFächer){
    for(let i = 1; i <= 4; i++){
        naturwissenschaften.push(fach + "Q" + i)
    } 
    
}
//die Klammer war unten
   
for(fach of GesellschaftswissenschafteFächer){
    for(let i = 1; i <= 4; i++){
        gesellschaftswissenschaften.push(fach + "Q" + i)
        } 
}
for(fach of KünstlericheFächer){
    for(let i = 1; i <= 4; i++){
        künstlerisch.push(fach + "Q" + i)
        } 
}

for(fach of Sprachen){
    for(let i = 1; i <= 4; i++){
        sprachen.push(fach + "Q" + i)
        } 
}

for(fach of SonstigeFächer){
    for(let i = 1; i <= 4; i++){
        sonstiges.push(fach + "Q" + i)
        } 
}
//console.log(naturwissenschaften)
//console.log(gesellschaftswissenschaften)
//console.log(künstlerisch)
//console.log(sonstiges)

//Grundkurse sortiert
let SelectedNat = [];
let SelectedGes = [];
let SelectedKün = [];
let SelectedSpr = [];     
let SelectedSon = [];

console.log(GkNoten)
let count = 0; 

for(i of Object.keys(GkNoten)){
    
    if(naturwissenschaften.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            SelectedNat.push(iClean)
            count = 0
        }
        count = count + 1 
   }

   if(gesellschaftswissenschaften.includes(i)){
    iClean = i.substr(0, i.length - 2)
    //console.log(iClean)
    console.log(count)
    if(count == 3){
        SelectedGes.push(iClean)
        count = 0
    }
    count = count + 1 
    }

    if(künstlerisch.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            SelectedKün.push(iClean)
            count = 0
        }
        count = count + 1 
    }

    if(sprachen.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            SelectedSpr.push(iClean)
            count = 0
        }
        count = count + 1 
    }
    
   if(sonstiges.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            SelectedSon.push(iClean)
            count = 0
        }
        count = count + 1 
    }
    
}
console.log(SelectedGes)
console.log(SelectedKün)
console.log(SelectedNat)
console.log(SelectedSon)
console.log(SelectedSpr)


//LK aussortieren

for(i of Object.keys(LkNoten)){
    
    if(naturwissenschaften.includes(i)){
        iClean = i.substr(0, i.length - 2)
        
        console.log(count)
        if(count == 3){
            console.log(iClean)
            count = 0
        }
        count = count + 1 
   }

   if(gesellschaftswissenschaften.includes(i)){
    iClean = i.substr(0, i.length - 2)
    //console.log(iClean)
    console.log(count)
    if(count == 3){
        console.log(iClean)
        count = 0
    }
    count = count + 1 
    }

    if(künstlerisch.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            console.log(iClean)
            count = 0
        }
        count = count + 1 
    }

    if(sprachen.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            console.log(iClean)
            count = 0
        }
        count = count + 1 
    }
    
   if(sonstiges.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        console.log(count)
        if(count == 3){
            console.log(iClean)
            count = 0
        }
        count = count + 1 
    }
    
}