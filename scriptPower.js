let boxEl1;
let boxEl2;
let villagebg;
let clickCount = 4;
let checkfirsttime = 0; // don't forget set it to 0 when you finnish all testing css
let powers = ['windInFor', 'waterInFor', 'solarInFor', 'bioInFor', 'refInFor', 'how2'];
function openEl(x) {
    clickCount = 1;
    boxEl1 = document.getElementById(powers[x]);
    boxEl1.style.visibility = "visible";
    boxEl2 = document.getElementById('checkdiv');
    boxEl1.style.animation = "opElAni .25s linear";
    boxEl2.style.visibility = "visible";

    switch (x) {
        case 0:
            console.log(clickCount + " this 1");
            document.getElementById('box1-1').style.animation = "fadeInR 1.5s linear";
            document.getElementById('box1-2').style.animation = "fadeInR 1.5s linear";
            document.getElementById('picG1').style.visibility = "visible";
            document.getElementById('windInFor').scrollTop = 0 + "px";
            if (x == 0) {

                document.getElementById('box0').style.visibility = "visible";
            }
            for (let f = 2; f < 10; f++) {
                document.getElementById('box1-' + f).style.visibility = "hidden";
            }
            break;
        /* Case 1 - 3 wind > water > solar > bio */

        
        
        case 5:
            if (checkfirsttime == 0) {
                checkfirsttime = 1;
            }
            break;
    }

}


function closeEl() {
    clickCount++;
    if (checkfirsttime == 1) {
        document.getElementById('village').style.animation = 'fadeShow 3s linear';
        checkfirsttime = 2;
        document.getElementById('checkdiv').style.opacity = '1';
    }
    
    boxEl1.style.animation = "clElAni .2s linear";
    setTimeout(() => {
        boxEl1.style.visibility = "hidden";
        boxEl2.style.visibility = "hidden";
        document.getElementById('picG1').style.visibility = "hidden";
        document.getElementById('picG2').style.visibility = "hidden";
        for (let bx = 3; bx < 10; bx++) {
            if (bx == 4) {
                for (let bx1 = 1; bx1 < 4; bx1++) {
                    document.getElementById('box1-' + bx + '-' + bx1).style.visibility = "hidden";
                    document.getElementById('box1-' + bx + '-' + bx1).style.animation = "";
                }
            }
            else if (bx == 9) {
                document.getElementById('box1-' + bx + '-' + 1).style.visibility = "hidden";
                document.getElementById('box1-' + bx + '-' + 1).style.animation = "";
            }
            else {
                document.getElementById('box1-' + bx).style.visibility = "hidden";
                document.getElementById('box1-' + bx).style.animation = "";
            }
        }
        if (allPowerOn == 4){ // when you close the 4th clean power pop up ref & setting will showup automatic
            applyPower(4);
        }
        
    }, 190); //Delay For animation < animation = smooth

    // if (clickCount > 2) {   
    //     // boxEl2.style.animation = "clElAni .2s linear";
    //     setTimeout(() => {

    //     }, 190); //Delay For animation < animation = smooth
    // }
    //console.log(clickCount + " this 2");
}


function chkPos(n) {
    var elmnt = document.getElementById(powers[n]);
    var y = elmnt.scrollTop;
    console.log("Position : " + y + "px");
    return y;
}

function showEL1(n) {
    let posY = chkPos(n);
    if (posY >= 460) {
        document.getElementById('box1-3').style.animation = "fadeInT 1s linear";
        document.getElementById('box1-3').style.visibility = "visible";
        document.getElementById('picG2').style.visibility = "visible";
    }
    if (posY >= 650) {
        document.getElementById('box1-4-1').style.animation = "fadeInT 1.5s linear";
        document.getElementById('box1-4-1').style.visibility = "visible";
        document.getElementById('box1-4-2').style.animation = "fadeInDD 1.5s linear";
        document.getElementById('box1-4-2').style.visibility = "visible";
        document.getElementById('box1-4-3').style.animation = "fadeInT 1.5s linear";
        document.getElementById('box1-4-3').style.visibility = "visible";
    }
    if (posY >= 900) {
        document.getElementById('box1-5').style.animation = "fadeInL 1.5s linear";
        document.getElementById('box1-5').style.visibility = "visible";
        document.getElementById('picG3').style.visibility = "visible";
    }

    if (posY >= 1200) {
        document.getElementById('box1-6').style.animation = "fadeInR 1.5s linear";
        document.getElementById('box1-6').style.visibility = "visible";
    }

    if (posY >= 1390) {
        document.getElementById('box1-7').style.animation = "fadeInR 1.5s linear";
        document.getElementById('box1-7').style.visibility = "visible";
    }

    if (posY >= 1580) {
        document.getElementById('box1-8').style.animation = "fadeInO 1s linear";
        document.getElementById('box1-8').style.visibility = "visible";
        document.getElementById('box1-9-1').style.animation = "scaleUp .5s linear";
        document.getElementById('box1-9-1').style.visibility = "visible";
    }







    // if (posY >= 200) {
    //     document.getElementById('box1').style.animation = "fadeInL .5s linear";
    //     document.getElementById('box1').style.visibility = "visible";
    // }

    // if (posY >= 790) {
    //     document.getElementById('box2').style.animation = "fadeInR .5s linear";
    //     document.getElementById('box2').style.visibility = "visible";
    // }

    // if (posY >= 1090) {
    //     document.getElementById('box3').style.animation = "fadeInL .5s linear";
    //     document.getElementById('box3').style.visibility = "visible";
    // }

    // // Reset Elemnts
    // if (posY <= 90) {
    //     for (let i = 1; i < 4; i++) {
    //         document.getElementById('box' + i).style.visibility = "hidden";
    //         document.getElementById('box' + i).style.animation = "";
    //     }
    // }

}