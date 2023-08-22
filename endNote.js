LkNoten = JSON.parse(localStorage.getItem("LkNoten"));

GkNoten = JSON.parse(localStorage.getItem("GkNoten"));

mAbiturHalbjahrNoten = JSON.parse(localStorage.getItem("mündlichesAbiturHalbjahrNoten"));

FacharbeitNote = JSON.parse(localStorage.getItem("FacharbeitNote"));

AbiturNoten = JSON.parse(localStorage.getItem("AbiturNoten"));



//clear localStorage
//localStorage.clear();


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

//console.log(GkNoten)
let count = 0; 

for(i of Object.keys(GkNoten)){
    
    if(naturwissenschaften.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        //console.log(count)
        if(count == 3){
            SelectedNat.push(iClean)
            count = 0
        }
        count = count + 1 
   }

   if(gesellschaftswissenschaften.includes(i)){
    iClean = i.substr(0, i.length - 2)
    //console.log(iClean)
    //console.log(count)
    if(count == 3){
        SelectedGes.push(iClean)
        count = 0
    }
    count = count + 1 
    }

    if(künstlerisch.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        //console.log(count)
        if(count == 3){
            SelectedKün.push(iClean)
            count = 0
        }
        count = count + 1 
    }

    if(sprachen.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        //console.log(count)
        if(count == 3){
            SelectedSpr.push(iClean)
            count = 0
        }
        count = count + 1 
    }
    
   if(sonstiges.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        //console.log(count)
        if(count == 3){
            SelectedSon.push(iClean)
            count = 0
        }
        count = count + 1 
    }
    
}
//console.log(SelectedGes)
//console.log(SelectedKün)
//console.log(SelectedNat)
//console.log(SelectedSon)
//console.log(SelectedSpr)

let abiVoraussetungen = {"D": false, "FSp": false,"M": false, "Nat": false,"Ges": false,"Kunst": false,"Münd":false, "LKs": false, "FA": false}

naturwissenschaftNote = 0
matheNote = 0
gesNote = 0
deutschNote = 0
kustNote = 0
fremdspracheNote = 0
facharbeitNote =0

//Kurse die eingebrachtwerden müssen insgesamt 35
kurse = 0



//einbring logic
console.log(LkNoten)
count = 0

let sumZwischenListeLK =[]
for(i of Object.keys(LkNoten)){
    
    if(naturwissenschaften.includes(i)){
        iClean = i.substr(0, i.length - 2)
        
        //console.log(count)
        if(count == 3){
            //console.log(iClean)

            if(iClean == "Mathematik"){

                //Mathe erfüllt
                console.log("Mathe erfüllt")
                abiVoraussetungen["M"] = true
                sumZwischenListeLK.push(addNotenLk(iClean))
                kurse += 4

                
                
            }else if(iClean == "Informatik"){
                //info

                sumZwischenListeLK.push(addNotenLk(iClean))
                kurse += 4
                //Mathe aus GK
                //NAturwissenschaft aus GK

            }else{
                //Naturwissenschaft erfüllt
                abiVoraussetungen["Nat"] = true
                sumZwischenListeLK.push(addNotenLk(iClean))
                kurse += 4

            }

            count = 0
        }

        count = count + 1 
   }

   if(gesellschaftswissenschaften.includes(i)){
    iClean = i.substr(0, i.length - 2)
    //console.log(iClean)
    //console.log(count)
    if(count == 3){
        console.log(iClean)

        //Gesllschaftswissenschaft erfüllt
        sumZwischenListeLK.push(addNotenLk(iClean))
        abiVoraussetungen["Ges"] = true
        kurse += 4
        count = 0
    }
    count = count + 1 
    }

    if(künstlerisch.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        //console.log(count)
        if(count == 3){
            console.log(iClean)
            //künstlerisches erfüllt
            //2. mündliches Prüfungsfach ist muss
            kurse += 4
            sumZwischenListeLK.push(addNotenLk(iClean))
            abiVoraussetungen["Kunst"] = true
            count = 0
        }
        count = count + 1 
    }

    if(sprachen.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)
        //console.log(count)
        if(count == 3){
            console.log(iClean)
            
            if (iClean == "Deutsch"){
                //deutsch erfüllt

                sumZwischenListeLK.push(addNotenLk(iClean))
                abiVoraussetungen["D"] = true
                kurse += 4
                //fremdsprache aus Grundkurs
                

            }else{
                //fremdsprache erfüllt//voraussetztung, dass alles nach vorgabe gewählt wurde
                sumZwischenListeLK.push(addNotenLk(iClean))
                abiVoraussetungen["FSp"] = true
                kurse += 4
                //deutsch aus Grundkurs
            }
            count = 0
        }
        count = count + 1 
    }
    
   if(sonstiges.includes(i)){
        iClean = i.substr(0, i.length - 2)
        //console.log(iClean)

        if(count == 3){
            console.log(iClean)
            if (iClean == "Sport"){
                //Sport erfüllt#
                sumZwischenListeLK.push(addNotenLk(iClean))
                kurse += 4
                
            }else{
                //Reli erfüllt
                sumZwischenListeLK.push(addNotenLk(iClean))
                kurse += 4
            } 


            count = 0
        }
        count = count + 1 
    }
    
}
//LKS werden besten Zwei gesucht und verdoppelt und endpunktzahl ermittelt
console.log("sumZwischenLK: " + sumZwischenListeLK)
besterLK = notenVergleich(sumZwischenListeLK)
console.log(besterLK)
//kleister lK
for (i of sumZwischenListeLK){
    a = 0
    if (i > a){
        a = i
    }
}
dritBesterLK = a
//2. LK
for (i of sumZwischenListeLK){
    
    if (i < besterLK && i> dritBesterLK){
        zweitBesterLK = i
    }
}

lkNotenSumme = (besterLK * 2) + (zweitBesterLK * 2) + dritBesterLK
abiVoraussetungen["LKs"] = true
console.log("1: " + besterLK + "   2: " + zweitBesterLK +"   3: " + dritBesterLK)
console.log("Summe: " + lkNotenSumme)
console.log(abiVoraussetungen)
console.log("eingebrachte Kurse: " + kurse)



//unerfüllte Vorgaben aus Grundkuse suchen und erfüllen

let sumZwischenListe =[]

for (i of  Object.keys(abiVoraussetungen))
    if (abiVoraussetungen[i] == false && i == "Nat"){
        console.log(i)
        //Naturwissenschatft aus Grundkurs
        for (i of SelectedNat){
            //console.log(i)
            if (i != "Informatik" || i != "Mathe" || i != iClean){

                sumNoten = addNotenGk(i)
                sumZwischenListe.push(sumNoten)

            }
        }
        console.log(sumZwischenListe)
        naturwissenschaftNote = notenVergleich(sumZwischenListe)
        sumZwischenListe = []
        abiVoraussetungen["Nat"] = true
        kurse += 4
    } else if(abiVoraussetungen[i] == false && i == "M"){
        matheNote = addNotenGk(i)
        abiVoraussetungen["M"] = true
        kurse += 4
    }else if(abiVoraussetungen[i] == false && i == "Ges"){
        for (i of SelectedGes){
            //console.log(i)

            sumNoten = addNotenGk(i)
            sumZwischenListe.push(sumNoten)

        }
        console.log(sumZwischenListe)
        gesNote = notenVergleich(sumZwischenListe)
        sumZwischenListe = []
        abiVoraussetungen["Ges"] = true
        kurse += 4
    }else if(abiVoraussetungen[i] == false && i == "Kunst"){
        // es müssen min 2 eigebracht werde 1 aus 13/1, beste kombi suchen
        //hier 
    }else if(abiVoraussetungen[i] == false && i == "FSp"){
        for (i of SelectedSpr){
            //console.log(i)
            if(i != "Deutsch"){
                sumNoten = addNotenGk(i)
                sumZwischenListe.push(sumNoten)
            }
        
        }
        console.log(sumZwischenListe)
        fremdspracheNote = notenVergleich(sumZwischenListe)
        sumZwischenListe = []
        abiVoraussetungen["FSp"] = true
        kurse += 4

    }else if(abiVoraussetungen[i] == false && i == "D"){
        for (i of SelectedSpr){
            //console.log(i)
            if(i == "Deutsch"){
                deutschNote = addNotenGk(i)
                abiVoraussetungen["D"] = true
                kurse += 4
            }
        
        }
    }
    else if(abiVoraussetungen[i] == false && i == "FA"){
        facharbeitNote = FacharbeitNote[FacharbeitNote]
        abiVoraussetungen["FA"] = true

    }else if(abiVoraussetungen[i] == false && i == "Münd"){
        //alle 4 halbjahre müssen eingebracht werden
        //abiVoraussetungen["FA"] = true
    }

console.log(abiVoraussetungen)
console.log("eingebrachte Kurse: " + kurse)
console.log(AbiturNoten)

//Fragen:
//Wie löscht man aus so einer let liste?
//Idee wie man beste Noten kobi bekommt wenn Vorgaben schon erfüllt sind -> Kunst?
//das mit der Mündlichennote


function notenVergleich(noten){

    a = 0
    for (i of noten){
        if (i > a){
            a = i
        }
    }
    return a
}

function addNotenGk(i){
    n1 = parseInt(GkNoten[i+"Q1"])
    n2 = parseInt(GkNoten[i+"Q2"])
    n3 = parseInt(GkNoten[i+"Q3"])
    n4 = parseInt(GkNoten[i+"Q4"])
    sumNoten = n1 + n2 +n3 + n4
    return sumNoten
}



function addNotenLk(i){
    n1 = parseInt(LkNoten[i+"Q1"])
    n2 = parseInt(LkNoten[i+"Q2"])
    n3 = parseInt(LkNoten[i+"Q3"])
    n4 = parseInt(LkNoten[i+"Q4"])
    sumNoten = n1 + n2 +n3 + n4
    return sumNoten
}