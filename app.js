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


function visesBilde(bilde) {
    if (document.getElementById(bilde).style.display = "block") {
        return 1
    }
    else {
        return 0
    }
}

function visFrukt(bilde) {
    if (visesBilde(bilde) == 1) {
        document.getElementById(bilde).style.display = "none";
    }
    else {
        document.getElementById(bilde).style.display = "block";
    }
}


/* se/skjul funksjon */
function hideFruit(){
    document.getElementById('bilde1').style.display = "none";
    document.getElementById('bilde2').style.display = "none";
    document.getElementById('bilde3').style.display = "none";
    document.getElementById('bilde4').style.display = "none";

}



//