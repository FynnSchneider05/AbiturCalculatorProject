LkNoten = JSON.parse(localStorage.getItem("LkNoten"));

GkNoten = JSON.parse(localStorage.getItem("GkNoten"));

mAbiturHalbjahrNoten = JSON.parse(localStorage.getItem("mündlichesAbiturHalbjahrNoten"));

FacharbeitNote = JSON.parse(localStorage.getItem("FacharbeitNote"));

AbiturNoten = JSON.parse(localStorage.getItem("AbiturNoten"));






//Berechnung der Noten
const NaturwissenschafteFächer = ["Chemie", "Physik", "Biologie"];
const GesellschaftswissenschafteFächer = ["Erdkunde", "Geschichte", "Sozialkunde"];
const KünstlericheFächer = ["Kunst", "Musik", "Darstellendes Spiel"];
const Sprachen = ["Englisch", "Französisch", "Latein"];
const SonstigeFächer = ["Sport", "Religion", "Philosophie"];

let naturwissenschaften = [];
let gesellschaftswissenschaften = [];
let künstlerisch = [];
let sprachen = [];
let sonstiges = [];

let bedingungenAbi = {Lks: false, mündlich: false, Ma: false, D: false, Nat: false, Ges: false, Kün: false, Fsp: false, FA: false }

let eingebrachteHalbjahre = [];


//für getBestFillGk
let n = 1;
let nBesteNoten = {};

//Summen der Noten
let summeHalbjahre = 0;
let summeAbituNoten = 0;
let gesamtPunktzahl = 0;


for(let i = 0; i < eingebrachteHalbjahre.length; i++){
    
}


if(Object.keys(GkNoten).includes('MusikQ4') && GkNoten['MusikQ4'] == -1){
    GkNoten['MusikQ4'] = GkNoten['MusikQ3'];
    GkNoten['MusikQ3'] = 0;
}


for(fach of NaturwissenschafteFächer){
    for(let i = 1; i <= 4; i++){
        naturwissenschaften.push(fach + "Q" + i)
    } 
    
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
//turwissenschaften)
//console.log('i: ',gesellschaftswissenschaften)
//console.log('i: ',künstlerisch)
//console.log('i: ',sonstiges)

lksEinbringen();
findTwoBestLks();
mündlichePrüfungenEinbringen();
pflichtGksEinbringen();

halbjahreAuffüllen();

//halbjahre + Facharbeit
eingebrachteHalbjahreSumme();


abiturNotenVerrechnen();

gesamtPunktzahlBerechnen();




//Functionen


//Pflichtfächer

function lksEinbringen(){
    for(hj of Object.keys(LkNoten)){
        eingebrachteHalbjahre.push([hj, LkNoten[hj]]);
        checkBedingungen(hj);
    }
    bedingungenAbi['Lks'] = true;
}

function findTwoBestLks(){
    let lKList = [];
    for(hj of Object.keys(LkNoten)){
        let fach = hj.substring(0, hj.length -2);
        if(lKList.includes(fach)){
            continue;
        }
        lKList.push(fach);
        
    }
    lKList.sort((a,b) => {
        sumA = 0;
        sumB = 0;
        for(let i = 1; i <= 4; i++){
            sumA += Number(LkNoten[a + 'Q' + i]);
            sumB += Number(LkNoten[b + 'Q' + i]);
      
            
        }
        return sumB - sumA;
    })

    for(let i = 1; i <= 4; i++){
        eingebrachteHalbjahre.push([lKList[0] + 'Q' + i, LkNoten[lKList[0] + 'Q' + i]]);
        eingebrachteHalbjahre.push([lKList[1] + 'Q' + i, LkNoten[lKList[1] + 'Q' + i]]);

    }
}

function mündlichePrüfungenEinbringen(){
    for(hj of Object.keys(mAbiturHalbjahrNoten)){
        eingebrachteHalbjahre.push([hj, mAbiturHalbjahrNoten[hj]]);
        checkBedingungen(hj);
        }
        bedingungenAbi['mündlich'] = true;
}

function pflichtGksEinbringen(){

    //Mathe
    if(bedingungenAbi['Ma'] == false){
        for(gk of Object.keys(GkNoten)){
            if(/^Mathematik/.test(gk)){
                eingebrachteHalbjahre.push([gk, GkNoten[gk]])
                bedingungenAbi['Ma'] = true;
                
            }
        }
    }

    //Deutsch
    if(bedingungenAbi['D'] == false){
        for(gk of Object.keys(GkNoten)){
            if(/^Deutsch/.test(gk)){
                eingebrachteHalbjahre.push({gk: GkNoten[gk]})
                bedingungenAbi['D'] = true;

            }
        }
    }

    //Naturwissenschaften
    if(bedingungenAbi['Nat'] == false){
           let bestesFach = bestesFachFinden(naturwissenschaften);
        for(let i = 1; i <= 4; i++){
           eingebrachteHalbjahre.push([bestesFach+'Q'+i,GkNoten[bestesFach+'Q'+i]])
           bedingungenAbi['Nat'] = true;
    
        }
    }

    //Gesellschaftswissenschaften
    if(bedingungenAbi['Ges'] == false){
        let bestesFach = bestesFachFinden(gesellschaftswissenschaften);
     for(let i = 1; i <= 4; i++){
        eingebrachteHalbjahre.push([bestesFach+'Q'+i,GkNoten[bestesFach+'Q'+i]])
        bedingungenAbi['Ges'] = true;
        
     }
 }

    //Fremdsprachen
    if(bedingungenAbi['Fsp'] == false){
        let bestesFach = bestesFachFinden(sprachen);
    for(let i = 1; i <= 4; i++){
        eingebrachteHalbjahre.push([bestesFach+'Q'+i,GkNoten[bestesFach+'Q'+i]])
        bedingungenAbi['Fsp'] = true;
        
 }
}

    //Künstlerische Fächer
    if(bedingungenAbi['Kün'] == false){
        if(Object.keys(GkNoten).includes('MusikQ1')){
            let bestesHalbjahr = bestesHalbjahrFinden('Musik')
            eingebrachteHalbjahre.push([bestesHalbjahr, GkNoten[bestesHalbjahr]]);
            eingebrachteHalbjahre.push(['MusikQ4', GkNoten['MusikQ4']])
            bedingungenAbi['Kün'] = true;

        }
        else{
            let bestesHalbjahr = bestesHalbjahrFinden('Kunst')
            eingebrachteHalbjahre.push([bestesHalbjahr, GkNoten[bestesHalbjahr]]);
            eingebrachteHalbjahre.push(['KunstQ4', GkNoten['KunstQ4']]);
            bedingungenAbi['Kün'] = true;
        }
        
}

    
}





//Ende Pflichtfächer



//Auffüllen mit übirgen Halbjahren
function halbjahreAuffüllen(){

    //wie viele müssen aufgefüllt werden
    let anzahlGesuchteHalbjahre = 0;
    anzahlGesuchteHalbjahre = 43 - eingebrachteHalbjahre.length;
    console.log(eingebrachteHalbjahre.length)
   console.log(anzahlGesuchteHalbjahre)

    //notenListe mit nicht eingebrachten Fächern [{MatheQ1: 13}, {DeutschQ3: 9}]
    let eingebrachteHalbjahreFächer = getEingebrachterHalbjahre();
  
    let notenListe = []
    for(halbjahr of Object.keys(GkNoten)){
        //checkt ob schon eingebracht
            if(eingebrachteHalbjahreFächer.includes(halbjahr)){
                continue;
                }
            else{
                notenListe.push([halbjahr, GkNoten[halbjahr]])
            }
    }


    //Objekt mit allen Q4 Halbjahren (einbegracht und nicht eingebracht)
    let Q4Liste = {};
    for(halbjahr of Object.keys(GkNoten)){
        if(/Q4$/.test(halbjahr)){
          
            Q4Liste[halbjahr] = GkNoten[halbjahr]
        }}
    

  
    let notenListe1 = sortToListe1(notenListe, Q4Liste);
    let notenListe2 = sortToListe2(notenListe);

    sucheNBesteNoten(notenListe1, notenListe2, anzahlGesuchteHalbjahre);
    nBesteNotenEinbringen();
}









/*
Neuer Ansatz:

   1. Liste Sortiert nach Halbjahren + Q4
   2. Liste Sortiert nach Halbjahren Ohne höchstes L1 Halbjahr

   adde L1[0]
   lösche L1[0]
   wenn von L2[0] schon Q4 geaddet ist, adde L2[0] und lösche L2[0]
   wenn nicht adde wieder L1[0]



*/

//Sortiert nach Note mit Q4 Note addiert
function sortToListe1(notenListe, Q4Liste){
        notenListe.sort((a,b) => {
                return (Number(b[1]) + Number(Q4Liste[b[0].substring(0,b[0].length-2) + 'Q4'])) - (Number(a[1]) + Number(Q4Liste[a[0].substring(0,a[0].length-2) + 'Q4']));
        });
        
        //muss in sortierte liste ka wieso aber geht nur so
        let sortierteListe = []
    
        for(i of notenListe){
        sortierteListe.push(i);
        }
        return sortierteListe;
    }

//Sortiert nach Noten
function sortToListe2(notenListe){
        notenListe.sort((a,b) => {
            
            return b[1] - a[1]
        })

        return notenListe;
    }



function sucheNBesteNoten(liste1, liste2, anzahlGesuchteHalbjahre){
    //notenListe1,2 = [{MatheQ1: 14},{DeutschQ2: 9}]
    // liste1 nach summe, liste2 nach noten
    //nBesteNoten = {}

    while(n <= anzahlGesuchteHalbjahre){
    if(n == anzahlGesuchteHalbjahre){
        letztesHalbjahrEinbringen(liste2);
        console.log(n);
        console.log(eingebrachteHalbjahre)
        console.log('hh')
        return;
    }
    console.log('hh')
 
    liste2Einbringen(liste2, anzahlGesuchteHalbjahre);
    liste1Einbringen(liste1, anzahlGesuchteHalbjahre);
    
    }

    
}

function liste1Einbringen(liste1, anzahlGesuchteHalbjahre){
    for(i of liste1){
        if(n == anzahlGesuchteHalbjahre){
            return;
        }
        if(Object.keys(nBesteNoten).includes(i[0]) || Object.keys(nBesteNoten).includes(i[0].substring(0, i[0].length-2) + "Q4")){
            continue;
        }
        nBesteNoten[i[0]] = i[1];
        n++;
        console.log(i);
        
    

        if(/Q4$/.test(i[0])){
            return;
        }

        nBesteNoten[i[0].substring(0, i[0].length-2) + "Q4"] = GkNoten[[i[0].substring(0, i[0].length-2) + "Q4"]];
        n++;
        console.log(i);
        
    
        return;
    }
}

function liste2Einbringen(liste2, anzahlGesuchteHalbjahre){
    for(i of liste2){
        if(n == anzahlGesuchteHalbjahre){
            return;
        }
        if(Object.keys(nBesteNoten).includes(i[0])){
            
            continue;
        }

        if(!Object.keys(nBesteNoten).includes(i[0].substring(0,i[0].length-2) + "Q4")){
            return;
        }

        nBesteNoten[i[0]] = i[1];
        n++;
        console.log(i);
        
    }
}


function letztesHalbjahrEinbringen(liste2){
    for(i of liste2){
        if(Object.keys(nBesteNoten).includes(i[0])){
            continue;
        }

        if(/Q4$/.test(i) || Object.keys(nBesteNoten).includes(i[0].substring(0,i[0].length-2) + "Q4")){
            nBesteNoten[i[0]] = i[1];
            n++;
            console.log(i);
            return;
        }
        
    }
}

//fügt nBeste noten zu eingebrachteHalbjahre hinzu
function nBesteNotenEinbringen(){
    for(i of Object.keys(nBesteNoten)){
        eingebrachteHalbjahre.push([i, GkNoten[i]]);
    }
}




//eingebrachte Halbjahre Summe
function eingebrachteHalbjahreSumme(){
    let sum = 0;
    eingebrachteHalbjahre.map((hj) => {
        sum += Number(hj[1]);
    })
    sum += Number(FacharbeitNote['FacharbeitNote']);
    summeHalbjahre = sum * 40/44;
}





//AbiturNoten schriftlich / Mündliche
function abiturNotenVerrechnen(){
    let lenght = Object.keys(AbiturNoten).length;
    let sum = 0;
    for(i of Object.values(AbiturNoten)){
        sum += i * (9 - lenght);
    }
    summeAbituNoten = sum;    
}



//Gesamtnote Berechnen
function gesamtPunktzahlBerechnen(){
    gesamtPunktzahl = summeAbituNoten + summeHalbjahre;
    console.log(summeAbituNoten, '+', summeHalbjahre,'=',gesamtPunktzahl)
}


//helfer

function checkBedingungen(hj){
    
    if(gesellschaftswissenschaften.includes(hj)){
        bedingungenAbi['Ges'] = true;
    }

    if(naturwissenschaften.includes(hj)){
        bedingungenAbi['Nat'] = true;
    }
    
    if(künstlerisch.includes(hj)){
        bedingungenAbi['Kün'] = true;
    }

    if(sprachen.includes(hj)){
        bedingungenAbi['Fsp'] = true;
    }

    if(hj == "MathematikQ1"){
        bedingungenAbi['Ma'] = true;
    }

    if(hj == "DeutschQ1"){
        bedingungenAbi['D'] = true;
    }

}
//Für Ges, Nat, Fsp
function bestesFachFinden(fächer){
     let list = fächer;
     
     list.sort((a,b) =>{
        if(!GkNoten[a]){
            return 1;
        }
        if(!GkNoten[b]){
            return -1;
        }

        let sumA = 0;
        let sumB = 0;
        for(let i = 1; i <= 4; i++){
          //  console.log('i: ',GkNoten[a.substring(0,a.length-2) + "Q" + i]);
            
            sumA += GkNoten[a.substring(0,a.length-2) + "Q" + i];
            sumB += GkNoten[b.substring(0,b.length-2) + "Q" + i];
            
        }
        return sumB - sumA;
     })
     
     return list[0].substring(0, list[0].length - 2);
}

//für Musik/Kunst
function bestesHalbjahrFinden(fach){
    let list = [];
    for(let i = 1; i <= 3; i++){
        list.push(fach + 'Q' + i);
    }
    list.sort((a,b) => {
        return GkNoten[b] - GkNoten[a];
    })
    return list[0];

}

function getEingebrachterHalbjahre(){
    let eingebrachteHalbjahreFächer = [];
    for(paar of eingebrachteHalbjahre){
        eingebrachteHalbjahreFächer.push(paar[0]);
    }
    return eingebrachteHalbjahreFächer;
}


//Ende Rechnungen;

//Dom
let punktAnzeige = document.getElementById('Punktzahl');
punktAnzeige.innerText = Math.floor(gesamtPunktzahl);




