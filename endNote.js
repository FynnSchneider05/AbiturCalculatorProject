LkNoten = JSON.parse(localStorage.getItem("LkNoten"));

GkNoten = JSON.parse(localStorage.getItem("GkNoten"));

mAbiturHalbjahrNoten = JSON.parse(localStorage.getItem("mündlichesAbiturHalbjahrNoten"));

FacharbeitNote = JSON.parse(localStorage.getItem("FacharbeitNote"));

AbiturNoten = JSON.parse(localStorage.getItem("AbiturNoten"));




//Berechnung der Noten
const NaturwissenschafteFächer = ["Mathematik", "Informatik", "Chemie", "Physik", "Biologie"];
const GesellschaftswissenschafteFächer = ["Erdkunde", "Geschichte", "Sozialkunde"];
const KünstlericheFächer = ["Kunst", "Musik"];
const SonstigeFächer = ["Sport", "Religion"];

let naturwissenschaften = [];
let gesellschaftswissenschaften = [];
let künstlerisch = [];
let sonstiges

for(fach of NaturwissenschafteFächer){
for(let i = 1; i <= 4; i++){
    naturwissenschaften.push(fach + "Q" + i)
    } 
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

for(fach of SonstigeFächer){
    for(let i = 1; i <= 4; i++){
        sonstiges.push(fach + "Q" + i)
        } 
}
}

let SelectedNat = {};
let SelectedGes = {};
let SelectedKün = {};   
let SelectedSon = {};

for(i of Object.keys(GkNoten)){
    if(Naturwissenschaften.includes(naturwissenschaften)){
        
    }
}




//function Berechnung(){
    
//}