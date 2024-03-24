let kaartBril1 = document.querySelector("#bril1"); //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartBril1status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartDeken1 = document.querySelector("#deken1"); //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartDeken1status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartRol1 = document.querySelector("#rol1"); //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartRol1status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartTuin1 = document.querySelector("#tuin1") //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartTuin1status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartBril2 = document.querySelector("#bril2"); //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartBril2status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartDeken2 = document.querySelector("#deken2"); //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartDeken2status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartRol2 = document.querySelector("#rol2"); //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartRol2status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
let kaartTuin2 = document.querySelector("#tuin2") //hiermee selecteer in vanuit javascript de afbeelding die in mijn html staat, met het specifieke id dat ik het heb gegeven
let kaartTuin2status = false; //hier heb ik alvast een waarde gegeven over de status van de afbeelding zodat ik die later in de functie met gebruik van if else kon aanpassen
const brilGeluid = new Audio ("geluidje/funny-meow-110120.mp3"); //bron van dit geluid is https://pixabay.com/sound-effects/
const dekenGeluid = new Audio ("geluidje/aww-cute-reaction-6208.mp3"); //bron van dit geluid is https://pixabay.com/sound-effects/
const rolGeluid = new Audio ("geluidje/oink-40664.mp3"); //bron van dit geluid is https://pixabay.com/sound-effects/
const tuinGeluid = new Audio ("geluidje/fart-83471.mp3"); //bron van dit geluid is https://pixabay.com/sound-effects/
 
let counter = 0; // Alisha heeft mij hierbij geholpen, hiermee zet ik de count op 0 zodat het vanaf 0 begint met optellen
 
function upCounter()
{
    counter++; //beteknt hetzelfde als + 1
    document.getElementById("pogingen").innerHTML = " " + counter; //hier roep ik de pogingen id aan die in mijn html staat
};
 
function klikBril1 () {
    if (kaartBril1status == false) {
        kaartBril1.src = "images/bril.png";
        kaartBril1status = true;
        if (kaartBril1status == true)//deze if'jes ook met hulp van Alisha
        {
            upCounter();
        }
    } else {
        kaartBril1.src = "images/kaartm.png";
        kaartBril1status = false;
    }
};
 
function klikDeken1 () {
    if (kaartDeken1status == false) {
        kaartDeken1.src = "images/deken.png";
        kaartDeken1status = true;
        if (kaartDeken1status == true)
        {
            upCounter();
        }
    } else {
        kaartDeken1.src = "images/kaartm.png";
        kaartDeken1status = false;
    }
};
 
function klikRol1 () {
    if (kaartRol1status == false) {
        kaartRol1.src = "images/rol.png";
        kaartRol1status = true;
        if (kaartRol1status == true)//deze if'jes ook
        {
            upCounter();
        }
    } else {
        kaartRol1.src = "images/kaartm.png";
        kaartRol1status = false;
    }
};
 
function klikTuin1 () {
    if (kaartTuin1status == false) {
        kaartTuin1.src = "images/tuin.png";
        kaartTuin1status = true;
        if (kaartTuin1status == true)//deze if'jes ook
        {
            upCounter();
        }
    } else {
        kaartTuin1.src = "images/kaartm.png";
        kaartTuin1status = false;
    }
};
 
function klikBril2 () {
    if (kaartBril2status == false) {
        kaartBril2.src = "images/bril.png";
        kaartBril2status = true;
        if (kaartBril2status == true)
        {
            upCounter();
        }
    } else {
        kaartBril2.src = "images/kaartm.png";
        kaartBril2status = false;
    }
};
 
function klikDeken2 () {
    if (kaartDeken2status == false) {
        kaartDeken2.src = "images/deken.png";
        kaartDeken2status = true;
        if (kaartDeken2status == true)
        {
            upCounter();
        }
    } else {
        kaartDeken2.src = "images/kaartm.png";
        kaartDeken2status = false;
    }
};
 
function klikRol2 () {
    if (kaartRol2status == false) {
        kaartRol2.src = "images/rol.png";
        kaartRol2status = true;
        if (kaartRol2status == true)//deze if'jes ook
        {
            upCounter();
        }
    } else {
        kaartRol2.src = "images/kaartm.png";
        kaartRol2status = false;
    }
};
 
function klikTuin2 () {
    if (kaartTuin2status == false) {
        kaartTuin2.src = "images/tuin.png";
        kaartTuin2status = true;
        if (kaartTuin2status == true)//deze if'jes ook
        {
            upCounter();
        }
    } else {
        kaartTuin2.src = "images/kaartm.png";
        kaartTuin2status = false;
    }
};
 

 
kaartBril1.addEventListener("click",klikBril1);
kaartBril1.addEventListener("click", function geluidje () {
    brilGeluid.play()
});
kaartDeken1.addEventListener("click", klikDeken1);
kaartDeken1.addEventListener("click", function geluidje () {
    dekenGeluid.play()
});
kaartRol1.addEventListener("click", klikRol1);
kaartRol1.addEventListener("click", function geluidje () {
    rolGeluid.play()
});
kaartTuin1.addEventListener("click", klikTuin1);
kaartTuin1.addEventListener("click", function geluidje () {
    tuinGeluid.play()
});
kaartBril2.addEventListener("click", klikBril2);
kaartBril2.addEventListener("click", function geluidje () {
    brilGeluid.play()
});
kaartDeken2.addEventListener("click", klikDeken2);
kaartDeken2.addEventListener("click", function geluidje () {
    dekenGeluid.play()
});
kaartRol2.addEventListener("click", klikRol2);
kaartRol2.addEventListener("click", function geluidje () {
    rolGeluid.play()
});
kaartTuin2.addEventListener("click", klikTuin2);
kaartTuin2.addEventListener("click", function geluidje () {
    tuinGeluid.play()
});