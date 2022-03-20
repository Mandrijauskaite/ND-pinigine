function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/* 1 uždavinys 
Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, 
o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
*/
let pinigine = [];
let pinigas = 0;

for (let i = 0; i < rand(10, 30); i++) { // rand(10, 30) - ilgis yra atsitiktinis nuo 10 iki 30
    pinigas = rand(0, 10);
    if (pinigas <= 2) {
        pinigas = 0;
        pinigas.push(pinigas)
    }
    else {
        pinigine.push(pinigas)
    }
}

console.log(pinigine);

/* 2 uždavinys 
Naudojant ciklą apskaičiuoti masyvo iš 1 
uždavinio reikšmių (pinigų esančių piniginėje) sumą;
*/
let suma = 0;
for (let i = 0; i < pinigine.lenght; i++) {
    suma = suma + pinigine[i]
}
console.log(suma);

/* 3 uždavinys 
Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio 
popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
*/
let popieriniaiPinigai = 0;
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        popieriniaiPinigai += pinigine[i];  
        console.log(pinigine[i]);
    }
}
console.log('Popierinių pinigų didesnių už 2 yra: ${popieriniaiPinigai}');

/* 4 uždavinys 
Išleisti visus metalinius pinigus 
(reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
*/


/* 5 uždavinys 
Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti 
kiek tokių didžiausių reikšmių masyve yra;
*/
let didziausia = Math.max(...pinigine);
let maxSum = 0;
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === didziausia); {
        maxSum ++
    }
    
}
console.log('didžiausia reikšmė masyve: ${didziausia}; tokių reikšmių masyve yra: ${maxSum}');

/* 6 uždavinys 
Visus masyvo elementus, kurie yra lygūs 0, pakeisti į 
tų elementų indeksų (vietų, numerių) reikšmes;
*/

/*CIA KLAUSIMAS KESTUCIUI: kodel jeigu atskirai spausdinu indeksa ir elementa, tai pasikeicia, jeigu yra nulis, 
bet jeigu bandau isspausdinti visa masyva, tai neiseina*/

/* 7 uždavinys 
Į 1 uždavinio masyvą pridėti tiek naujų reikšmių 
(pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
*/

/* 8 uždavinys 
Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. 
Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes 
arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
*/


/* 9 uždavinys 
Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų 
elementų, kurio pirmas elementas būtų masyvas iš 8 
uždavinio su monetom, o antras elementas masyvas iš 8 
uždavinio su popieriniais pinigais;
*/

/* 10 uždavinys 
Į 9 uždavinio masyvą, piniginę su dviem skyreliais, 
pridėti trečią skyrelį- 
masyvą su kortelėm: 
['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']
*/

/* 11 uždavinys 
Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
*/


/* 12 uždavinys 
Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 
'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' 
arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis 
(masyvo ilgis) pasidarytų lygus 20;
*/

/* 13 uždavinys 
Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
*/

/* 14 uždavinys 
Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 
loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su 
rand funkcija nuo 1000000000 iki 9999999999;
*/

/* 15 uždavinys 
Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
*/

/* 16 uždavinys 
Į piniginės popierinių pinigų skyrelį įdėti 500 
pinigų mažom kupiūrom ( generuoti atsitiktinius 
skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
*/

/* 18 uždavinys 
Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] 
ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
*/
