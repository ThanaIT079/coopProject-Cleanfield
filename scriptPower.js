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
    boxEl1.scrollTop = 0 + "px";
    switch (x) {
        case 0:
            console.log(clickCount + " this 1");
            document.getElementById('box1-1').style.animation = "fadeInR 1.5s linear";
            document.getElementById('box1-2').style.animation = "fadeInR 1.5s linear";
            document.getElementById('box1-1').style.visibility = "visible";
            document.getElementById('box1-2').style.visibility = "visible";
            document.getElementById('picG1').style.visibility = "visible";
            document.getElementById('picG4').style.animation = "fadeInT 1.5s linear";
            document.getElementById('picG4').style.visibility = "visible";
            //document.getElementById('windInFor').scrollTop = 0 + "px";
            if (x == 0) {

                document.getElementById('box0').style.visibility = "visible";
            }
            for (let f = 2; f < 10; f++) {
                document.getElementById('box1-' + f).style.visibility = "hidden";
            }
            break;
        /* Case 1 - 3 wind > water > solar > bio */
        case 1:
            document.getElementById('box2-1').style.animation = "fadeInR 1s linear";
            document.getElementById('box2-1').style.visibility = "visible";
            document.getElementById('box2-2').style.animation = "fadeInR 1s linear";
            document.getElementById('box2-2').style.visibility = "visible";
            document.getElementById('box2-3').style.animation = "fadeInR 1s linear";
            document.getElementById('box2-3').style.visibility = "visible";
            document.getElementById('picG1-2').style.animation = "fadeInT 1s linear";
            document.getElementById('picG1-2').style.visibility = "visible";
            break;
        case 2:
            document.getElementById('box3-1').style.animation = "fadeInR 1s linear";
            document.getElementById('box3-1').style.visibility = "visible";
            document.getElementById('box3-2').style.animation = "fadeInR 1s linear";
            document.getElementById('box3-2').style.visibility = "visible";
            document.getElementById('box3-3').style.animation = "fadeInR 1s linear";
            document.getElementById('box3-3').style.visibility = "visible";
            document.getElementById('picG2-3').style.animation = "fadeInT 1s linear";
            document.getElementById('picG2-3').style.visibility = "visible";
            break;
        case 3:
            document.getElementById('box4-1').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-1').style.visibility = "visible";
            document.getElementById('box4-2').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-2').style.visibility = "visible";
            document.getElementById('box4-3').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-3').style.visibility = "visible";
            document.getElementById('box4-3').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-3').style.visibility = "visible";
            document.getElementById('box4-4').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-4').style.visibility = "visible";
            document.getElementById('picG1-4').style.animation = "fadeInT 1s linear";
            document.getElementById('picG1-4').style.visibility = "visible";
            document.getElementById('picG2-4').style.animation = "scaleUpStrove 1s linear";
            document.getElementById('picG2-4').style.visibility = "visible";
            document.getElementById('picG3-4').style.animation = "scaleUpStrove 1s linear";
            document.getElementById('picG3-4').style.visibility = "visible";
            document.getElementById('picG4-4').style.animation = "scaleUpStrove 1s linear";
            document.getElementById('picG4-4').style.visibility = "visible";
            document.getElementById('picG5-4').style.animation = "scaleUpStrove 1s linear";
            document.getElementById('picG5-4').style.visibility = "visible";
            document.getElementById('picG6-4').style.animation = "scaleUpStrove 1s linear";
            document.getElementById('picG6-4').style.visibility = "visible";

            break;
        case 4:
            document.getElementById('refimg1_windmill').style.animation = "fadeInR 1s linear";
            document.getElementById('refimg1_windmill').style.visibility = "visible";
            document.getElementById('refimg2_leaf1').style.animation = "fadeInO 1s linear";
            document.getElementById('refimg2_leaf1').style.visibility = "visible";
            document.getElementById('refimg2_leaf2').style.animation = "fadeInO 1s linear";
            document.getElementById('refimg2_leaf2').style.visibility = "visible";

            break;
        case 5:
            document.getElementById('leaf1').style.animation = "fadeInR-leaf1 1.5s linear";
            document.getElementById('leaf1').style.visibility = "visible";
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
    }

    boxEl1.style.animation = "clElAni .2s linear";
    setTimeout(() => {
        boxEl1.style.visibility = "hidden";
        boxEl2.style.visibility = "hidden";

        // close WindInfor
        document.getElementById('picG1').style.visibility = "hidden";
        document.getElementById('picG2').style.visibility = "hidden";
        document.getElementById('picG4').style.animation = "";
        document.getElementById('picG4').style.visibility = "hidden";
        document.getElementById('picG9').style.animation = "";
        document.getElementById('picG9').style.visibility = "hidden";
        document.getElementById('picG10').style.animation = "";
        document.getElementById('picG10').style.visibility = "hidden";
        document.getElementById('picG15').style.animation = "";
        document.getElementById('picG15').style.visibility = "hidden";
        for (let bx = 1; bx < 10; bx++) {
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
        //Close WaterInfor
        document.getElementById('picG1-2').style.animation = "";
        document.getElementById('picG1-2').style.visibility = "hidden";
        document.getElementById('box2-1').style.animation = "";
        document.getElementById('box2-1').style.visibility = "hidden";
        document.getElementById('box2-2').style.animation = "";
        document.getElementById('box2-2').style.visibility = "hidden";
        document.getElementById('box2-3').style.animation = "";
        document.getElementById('box2-3').style.visibility = "hidden";
        document.getElementById('box2-4').style.animation = "";
        document.getElementById('box2-4').style.visibility = "hidden";
        document.getElementById('box2-5').style.animation = "";
        document.getElementById('box2-5').style.visibility = "hidden";
        document.getElementById('picG2-2').style.animation = "";
        document.getElementById('picG2-2').style.visibility = "hidden";
        document.getElementById('picG3-2').style.animation = "";
        document.getElementById('picG3-2').style.visibility = "hidden";
        document.getElementById('box2-6').style.animation = "";
        document.getElementById('box2-6').style.visibility = "hidden";
        document.getElementById('box2-7').style.animation = "";
        document.getElementById('box2-7').style.visibility = "hidden";
        document.getElementById('box2-8').style.animation = "";
        document.getElementById('box2-8').style.visibility = "hidden";
        document.getElementById('box2-9').style.animation = "";
        document.getElementById('box2-9').style.visibility = "hidden";
        document.getElementById('box2-10').style.animation = "";
        document.getElementById('box2-10').style.visibility = "hidden";

        //Close SoraInfor
        document.getElementById('box3-1').style.animation = "";
        document.getElementById('box3-1').style.visibility = "hidden";
        document.getElementById('box3-2').style.animation = "";
        document.getElementById('box3-2').style.visibility = "hidden";
        document.getElementById('box3-3').style.animation = "";
        document.getElementById('box3-3').style.visibility = "hidden";
        document.getElementById('picG2-3').style.animation = "";
        document.getElementById('picG2-3').style.visibility = "hidden";
        document.getElementById('box3-4').style.animation = "";
        document.getElementById('box3-4').style.visibility = "hidden";
        document.getElementById('box3-5').style.animation = "";
        document.getElementById('box3-5').style.visibility = "hidden";
        document.getElementById('picG4-3').style.animation = "";
        document.getElementById('picG4-3').style.visibility = "hidden";
        document.getElementById('box3-6').style.animation = "";
        document.getElementById('box3-6').style.visibility = "hidden";
        document.getElementById('picG5-3').style.animation = "";
        document.getElementById('picG5-3').style.visibility = "hidden";
        document.getElementById('box3-7').style.animation = "";
        document.getElementById('box3-7').style.visibility = "hidden";
        document.getElementById('box3-8').style.animation = "";
        document.getElementById('box3-8').style.visibility = "hidden";
        document.getElementById('box3-9').style.animation = "";
        document.getElementById('box3-9').style.visibility = "hidden";
        document.getElementById('box3-10').style.animation = "";
        document.getElementById('box3-10').style.visibility = "hidden";

        //Close BioInfor
        for (let BxB = 1; BxB < 18; BxB++) {
            document.getElementById('box4-' + BxB).style.animation = "";
            document.getElementById('box4-' + BxB).style.visibility = "hidden";
        }
        for (let BxBp = 1; BxBp < 13; BxBp++) {
            document.getElementById('picG' + BxBp + '-4').style.animation = "";
            document.getElementById('picG' + BxBp + '-4').style.visibility = "hidden";
        }

        // close How2
        for (let bx5 = 1; bx5 < 4; bx5++) {
            document.getElementById('leaf' + bx5).style.visibility = "hidden";
            document.getElementById('leaf' + bx5).style.animation = "";
        }


        if (allPowerOn == 4) { // when you close the 4th clean power pop up ref & setting will showup automatic
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

function clearRef() {
    // closeRefInfor
    document.getElementById('refimg1_windmill').style.animation = "";
    document.getElementById('refimg1_windmill').style.visibility = "hidden";
    document.getElementById('refimg2_leaf1').style.animation = "";
    document.getElementById('refimg2_leaf1').style.visibility = "hidden";
    document.getElementById('refimg2_leaf2').style.animation = "";
    document.getElementById('refimg2_leaf2').style.visibility = "hidden";
}

function chkPos(n) {
    var elmnt = document.getElementById(powers[n]);
    var y = elmnt.scrollTop;
    console.log("Position : " + y + "px");
    return y;
}

function showEL1(n) {
    let posY = chkPos(n);
    // Open WindInfor
    if (n == 0) {
        if (posY >= 460) {
            document.getElementById('box1-3').style.animation = "fadeInT 1s linear";
            document.getElementById('box1-3').style.visibility = "visible";
            document.getElementById('picG2').style.visibility = "visible";
            document.getElementById('picG3').style.visibility = "visible";
            document.getElementById('picG9').style.visibility = "visible";
            document.getElementById('picG9').style.animation = "fadeIn-pic9 1s linear";
            document.getElementById('picG10').style.visibility = "visible";
            document.getElementById('picG10').style.animation = "fadeIn-pic10 1s linear";
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
            document.getElementById('picG15').style.visibility = "visible";
            document.getElementById('picG15').style.animation = "fadeIn-pic15 1s linear";
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
    }

    //Open WaterInfor
    if (n == 1) {
        if (posY >= 300) {
            document.getElementById('box2-4').style.animation = "fadeInT 1s linear";
            document.getElementById('box2-4').style.visibility = "visible";
            document.getElementById('box2-5').style.animation = "fadeInT 1s linear";
            document.getElementById('box2-5').style.visibility = "visible";
            document.getElementById('picG2-2').style.animation = "fadeInDD 1s linear";
            document.getElementById('picG2-2').style.visibility = "visible";
            document.getElementById('picG3-2').style.animation = "fadeInDD 1s linear";
            document.getElementById('picG3-2').style.visibility = "visible";
        }
        if (posY >= 700) {
            document.getElementById('box2-6').style.animation = "fadeInT 1s linear";
            document.getElementById('box2-6').style.visibility = "visible";
            document.getElementById('box2-7').style.animation = "fadeInR 1s linear";
            document.getElementById('box2-7').style.visibility = "visible";
        }
        if (posY >= 1000) {
            document.getElementById('box2-8').style.animation = "fadeInL 1s linear";
            document.getElementById('box2-8').style.visibility = "visible";
        }
        if (posY >= 1100) {
            document.getElementById('box2-9').style.animation = "fadeInT 1s linear";
            document.getElementById('box2-9').style.visibility = "visible";
            document.getElementById('box2-10').style.animation = "scaleUp .5s linear";
            document.getElementById('box2-10').style.visibility = "visible";
        }
    }

    //Open SoraInfor
    if (n == 2) {
        if (posY >= 300) {
            document.getElementById('box3-4').style.animation = "fadeInT 1s linear";
            document.getElementById('box3-4').style.visibility = "visible";
            document.getElementById('box3-5').style.animation = "fadeInT 1s linear";
            document.getElementById('box3-5').style.visibility = "visible";
            document.getElementById('picG4-3').style.animation = "fadeInDD 1s linear";
            document.getElementById('picG4-3').style.visibility = "visible";
        }
        if (posY >= 600) {
            document.getElementById('box3-6').style.animation = "fadeInT 1s linear";
            document.getElementById('box3-6').style.visibility = "visible";
            document.getElementById('picG5-3').style.animation = "fadeInR 1s linear";
            document.getElementById('picG5-3').style.visibility = "visible";
        }
        if (posY >= 900) {
            document.getElementById('box3-7').style.animation = "fadeInL 1s linear";
            document.getElementById('box3-7').style.visibility = "visible";
        }
        if (posY >= 1000) {
            document.getElementById('box3-8').style.animation = "fadeInR 1s linear";
            document.getElementById('box3-8').style.visibility = "visible";
        }
        if (posY >= 1200) {
            document.getElementById('box3-9').style.animation = "fadeInT 1s linear";
            document.getElementById('box3-9').style.visibility = "visible";
            document.getElementById('box3-10').style.animation = "scaleUp .5s linear";
            document.getElementById('box3-10').style.visibility = "visible";
        }
    }

    //Open BioInfor
    if (n == 3) {
        if (posY >= 280) {
            document.getElementById('box4-5').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-5').style.visibility = "visible";
            document.getElementById('box4-6').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-6').style.visibility = "visible";
            document.getElementById('picG7-4').style.animation = "fadeInR 1s linear";
            document.getElementById('picG7-4').style.visibility = "visible";
        }
        if (posY >= 600) {
            document.getElementById('box4-7').style.animation = "fadeInDD 1s linear";
            document.getElementById('box4-7').style.visibility = "visible";
        }
        if (posY >= 900) {
            document.getElementById('box4-8').style.animation = "fadeInDD 1s linear";
            document.getElementById('box4-8').style.visibility = "visible";
        }
        if (posY >= 1200) {
            document.getElementById('box4-9').style.animation = "fadeInDD 1s linear";
            document.getElementById('box4-9').style.visibility = "visible";
            document.getElementById('picG8-4').style.animation = "fadeInL 1s linear";
            document.getElementById('picG8-4').style.visibility = "visible";
            document.getElementById('picG9-4').style.animation = "fadeInL 1s linear";
            document.getElementById('picG9-4').style.visibility = "visible";

        }
        if (posY >= 1400) {
            document.getElementById('box4-10').style.animation = "fadeInDD 1s linear";
            document.getElementById('box4-10').style.visibility = "visible";
        }
        if (posY >= 1900) {
            document.getElementById('box4-11').style.animation = "fadeInTT 1s linear";
            document.getElementById('box4-11').style.visibility = "visible";
        }
        if (posY >= 2100) {
            document.getElementById('box4-12').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-12').style.visibility = "visible";
            document.getElementById('box4-13').style.animation = "fadeInL 1s linear";
            document.getElementById('box4-13').style.visibility = "visible";
            document.getElementById('picG10-4').style.animation = "fadeInR 1s linear";
            document.getElementById('picG10-4').style.visibility = "visible";
            document.getElementById('picG11-4').style.animation = "fadeInL 1s linear";
            document.getElementById('picG11-4').style.visibility = "visible";
        }
        if (posY >= 2400) {
            document.getElementById('box4-14').style.animation = "fadeInR 1s linear";
            document.getElementById('box4-14').style.visibility = "visible";
            document.getElementById('box4-15').style.animation = "fadeInR 1s linear";
            document.getElementById('box4-15').style.visibility = "visible";
            document.getElementById('picG12-4').style.animation = "fadeInR 1s linear";
            document.getElementById('picG12-4').style.visibility = "visible";

        }
        if (posY >= 2800) {
            document.getElementById('box4-16').style.animation = "fadeInTT 1s linear";
            document.getElementById('box4-16').style.visibility = "visible";
            document.getElementById('box4-17').style.animation = "scaleUp .5s linear";
            document.getElementById('box4-17').style.visibility = "visible";
        }
    }

    //Open How2
    if (n == 5) {
        if (posY >= 400) {
            document.getElementById('leaf3').style.animation = "fadeInR-leaf3 1.5s linear";
            document.getElementById('leaf3').style.visibility = "visible";
        }
        if (posY >= 1000) {
            document.getElementById('leaf2').style.animation = "fadeInR-leaf1 1.5s linear";
            document.getElementById('leaf2').style.visibility = "visible";
        }
    }







}