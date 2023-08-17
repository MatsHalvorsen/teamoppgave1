// function banan() {                         /*funskjoner for frukt knapper*/
//     document.getElementById('item1').innerHTML = "banan";
// }

// function eple() {
//     document.getElementById('item2').innerHTML = "eple";
// }

// function pære() {
//     document.getElementById('item3').innerHTML = "pære";
// }

// function appelsin() {
//     document.getElementById('item4').innerHTML = "appelsin";
// }



function visFrukt(bilde) {
    if (document.getElementById(bilde).style.display == "none") {
        document.getElementById(bilde).style.display = "inline";
    }
    else {
        document.getElementById(bilde).style.display = "none";
    }
}


/* se/skjul funksjon */
function hideFruit(){
    document.getElementById('bilde1').style.display = "none";
    document.getElementById('bilde2').style.display = "none";
    document.getElementById('bilde3').style.display = "none";
    document.getElementById('bilde4').style.display = "none";

    // for (let i = 1; document.getElementById('bilde' + i); i++) {
    //     document.getElementById('bilde' + i).style.display = "none";
    // }

}
let daynight = 1; // 1 day, 0 night
/* endre farge */
function changeColor(){
    if (daynight == 1) {
        document.body.style.background = 'white';
        document.getElementById('tittel').style.color = 'black';
    }
    else if (daynight == 0) {
        document.body.style.background = 'darkblue';
        document.getElementById('tittel').style.color = 'white';
    }
}







//