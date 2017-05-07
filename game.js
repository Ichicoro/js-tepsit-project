/**
 * game.js -- game code
 *
 * I 4 animatronic in ordine sono Freddy, Bonnie, Chica e Foxy
 *
 */

 function win() {
    Mousetrap.pause();
    clearTimeout(clock_timer);
    clearTimeout(BATTERY_TIMER);
    clearTimeout(AI_TIMER);
    musicbox.pause();
    $('#hud').hide();
    $('#overlays').hide();
    $('#jumpscare').css('opacity', '0.00');
    $('#jumpscare').attr('src', 'assets/images/jumpscares/win.png');
    $('#jumpscare').show();
    $('#jumpscare').fadeTo(2000, 1);
    dingdongdang.play();
    setTimeout(() => {
        victoryaudio.play();
    }, 2800);
    setTimeout(() => {
        location.reload();
    }, 10000);
 }

function changeBackground(x) {
    $('#backgroundimg').attr('src', x);
}

function changeTabletView(x) {
    $('#tabletbg').attr('src', x);
}

function drainPower() {
    var powerdraw = DRAIN_PER_SECOND;
    if (left_door_closed) { powerdraw+=0.5; };
    if (right_door_closed) { powerdraw+=0.5; };
    if (tablet_active) { powerdraw+=0.5; };
    if (BATTERY_LEVEL > 0) {
        BATTERY_LEVEL -= powerdraw;
    } else {
        BATTERY_LEVEL = 0;
        noBatteryLeft();
    }
    $('#powerleft_txt').text("Power left: " + Math.floor(BATTERY_LEVEL/2) + "%");
}

function updateUsage() {
    var imgnum = 1;
    if (left_door_closed) { imgnum++ };
    if (right_door_closed) { imgnum++ };
    if (tablet_active) { imgnum++ };
    var img = "assets/images/power/" + imgnum + "block.png";
    $('#powerusage_imgs').attr('src', img);
}


function checkTimer() {
    var timePassed = Date.now() - clock.valueOf(); // max value is 360000
    if (timePassed <= 60000) {
        $('#clock').text("1 AM");
    } else if (timePassed <= 120000) {
        $('#clock').text("2 AM");
    } else if (timePassed <= 180000) {
        $('#clock').text("3 AM");
    } else if (timePassed <= 240000) {
        $('#clock').text("4 AM");
    } else if (timePassed <= 300000) {
        $('#clock').text("5 AM");
    } else {
        //clock = undefined;
        win();
    }
}

function noBatteryLeft() {
    clearTimeout(BATTERY_TIMER);
    clearTimeout(AI_TIMER);
    Mousetrap.pause();
    var timerto = 0;
    tablet_enabled = false;
    dead = true;
    if (tablet_active) {
        turnOffTablet();
        timerto = 33.4*9;
    }
    $('#fanimg').css('z-index', '-5');
    setTimeout(() => {
        changeBackground('assets/images/office/office_nopower.png');
        $('#hud').hide();
        // clearTimeout(clock_timer);    // actually nvm, the timer keeps going :D
        shutdownaudio.volume = 0.3;
        shutdownaudio.play();
        setTimeout(() => {
            shutdownaudio.pause();
            playFreddyDeathAnim();
        },3000);
    }, timerto);
}

function playFreddyDeathAnim() {
    var rand = genRandom(20)+5;
    musicbox.play();
    for (var i=0;i<rand*4;i++) {
        setTimeout(() => {
            switch (genRandom(3)-1) {
                case 0: case 2: $('#jumpscare').attr('src', 'assets/images/office/office_nopower.png');
                        break;
                case 1: $('#jumpscare').attr('src', 'assets/images/office/office_nopower_freddy.png');
                        break;
            }
            $('#jumpscare').show();
        }, i*250);
    }
    setTimeout(() => {
        $('#jumpscare').attr('src', 'assets/images/office/office_nopower.png');
        musicbox.pause();
        fannoise.play();
        setTimeout(() => {
            fannoise.pause();
        }, 200);
        setTimeout(() => {
            clearTimeout(clock_timer);
            screamaudio.play();
            for (var i=1; i<21; i++) {
                setTimeout((x) => {
                    $('#jumpscare').attr('src',`assets/images/jumpscares/freddy/freddy_jumpscare_${x}.png`);
                },33.3*i, i);
            }
            setTimeout(() => {
                location.reload();
            }, 33.3*20);
        }, 200+genRandom(10)*1000);
    }, rand*1000);
}


function toggleTablet() {
    if (tablet_enabled) {
        if (tablet_active) {
            turnOffTablet();
            console.log("Tablet switched off");
        } else {
            turnOnTablet();
            console.log("Tablet switched on");
        }
        /* console.log('tablet_active = ' + tablet_active); */
    } else {
        console.log("Can't open/close the tablet. Is the player dead already?");
        return false;
    }
}


function playTabletAnim(up) {
    Mousetrap.pause();
    if (up) {
        $('#tabletanim').show();
        for (var i=1; i<11; i++) {
            setTimeout((x) => {
                $('#tabletanim').attr('src',`assets/images/tabletanim/tabletanim_${x}.png`);
            },33.3*i, i);
        }
        setTimeout(() => {$('#tabletanim').hide(); Mousetrap.unpause();}, 33.4*9);
    } else {
        $('#tabletanim').show();
        for (var i=1; i<11; i++) {
            setTimeout((x) => {
                $('#tabletanim').attr('src',`assets/images/tabletanim/tabletanim_${11-x}.png`);
            },33.3*i, i);
        }
        setTimeout(() => {$('#tabletanim').hide(); Mousetrap.unpause();}, 33.3*9);
    }
}


function turnOffTablet() {
    // Qui disattiviamo il tablet, attivando prima gli overlay (ovvero il ventilatore, le porte, ecc.)
    playTabletAnim(false);
    $('#overlays').show();
    setTimeout(() => {$('#tabletui').hide();}, 33.3*9);
    //$('#tabletui').hide();
    tablet_active = false;
}

function turnOnTablet() {
    // Qui attiviamo il tablet, disattivado prima gli overlay (ovvero il ventilatore, le porte, ecc.)
    $('#tabletui').show();
    playTabletAnim(true);
    updateTabletView();
    setTimeout(() => {
        $('#overlays').hide();}, 33.3*9);
    //$('#tabletui').show();
    tablet_active = true;
}

function toggleLeftDoor() {
    if (!dead) {
        if (left_door_closed) {
            $('#leftdoor').hide();
            left_door_closed = false;
        } else {
            $('#leftdoor').show();
            left_door_closed = true;
        }
    }
}

function toggleRightDoor() {
    if (!dead) {
        if (right_door_closed) {
            $('#rightdoor').hide();
            right_door_closed = false;
        } else {
            $('#rightdoor').show();
            right_door_closed = true;
        }
    }
}


function toggleLeftLight() {
    if (!dead) {
        if (left_light_on) {
            $('#leftlight').hide();
        } else {
            $('#leftlight').show();
        }
        left_light_on = left_light_on ? false : true;
    }
}

function toggleRightLight() {
    if (!dead) {
        if (right_light_on) {
            $('#rightlight').hide();
        } else {
            $('#rightlight').show();
        }
        right_light_on = right_light_on ? false : true;
    }
}




function updateTabletView() {
    if (tablet_active) {
        cameraaudio.pause();
        cameraaudio.play();
    }
    console.log("Camera pos: " + tablet_camera)
    switch (tablet_camera) {
        case "1a": update_1a(); break;
        case "1b": update_1b(); break;
        case "1c": update_1c(); break;
        case "3": update_3(); break;
        case "5": update_5(); break;
        case "6": update_6(); break;
        case "7": update_7(); break;
        case "2a": update_2a(); break;
        case "2b": update_2b(); break;
        case "4a": update_4a(); break;
        case "4b": update_4b(); break;
    }
}

function cameraSwitchHandler(x) {
    if (tablet_camera != x && tablet_active) {
        tablet_camera = x;
        //console.log(tablet_camera);
        updateTabletView();
    } else {
        console.log("Already in the same room...");
    }
}

function getCamId(x) {
    switch (x) {
        case "1a": return 1;
        case "1b": return 2;
        case "1c": return 3;
        case "5": return 4;
        case "6": return 5;
        case "7": return 6;
        case "2a": return 7;
        case "2b": return 8;
        case "4a": return 9;
        case "4b": return 0;
    }
}

function enableEnemies(override = false) {
    if (ai_enabled || override) {
        AI_TIMER = setInterval(moveEnemies, MOVE_INTERVAL)
    }
}


function moveEnemies() {
    /**
     *  1a is the show stage, or the "starting room" for bonnie, freddy and Chica.
     *  1b is the dining room.
     *  1c-[0..2] is the Pirate Cove, where Foxy stays until s/he runs to the office (ff) through the left-side corridors (2[a-b]).
     *  5 is the backstage, only Freddy can get here.
     *  7 is the bathrooms, only Chica and Freddy can get here.
     *  6 is the kitchen. Only Chica and Freddy can get here and there's no video feed.
     *  2a and 2b are the left-side corridors. Beware Bonnie (...and Foxy)!
     *  4a and 4b are the right-side corridors. Beware Chica and Freddy!
     *  ff is the office.
     *  ld is the left office door
     *  rd is the right office door
    **/

    if (genRandom(2) == 1) {
        if (enemy_pos[0] == "rd") {
            tryToKill(0);
        } else if (enemy_pos[1] == "ld") {
            tryToKill(1);
        } else if (enemy_pos[2] == "rd") {
            tryToKill(2);
        }
    } else {
        switch (genRandom(3)) {
            case 1: //moveFreddy();
                    //break;
            case 2: moveBonnie();
                    break;
            case 3: moveChica();
                    break;
        }
    }

    updateTabletView();
    logPositions();
}


function moveFreddy() {
    if (genRandom() <= difficulty[0]) {
        if (enemy_pos[1] == '1a') {
            enemy_pos[1] = '1b';
        } else if (enemy_pos[1] == '1b') {
            enemy_pos[1] = '2a';
        } else if (enemy_pos[1] == '2a') {
            switch (genRandom(3)) {
                case 1: enemy_pos[1] = '2b';
                        break;
                case 2: enemy_pos[1] = '3';
                        break;
                case 3: enemy_pos[1] = '2a';
                        break;
            }
        } else if (enemy_pos[1] == '2b') {
            switch (genRandom(5)) {
                case 1: case 4: enemy_pos[1] = 'ld';
                        $('#leftlight').attr('src', "assets/images/office/office_leftlight_bonnie.png");
                        break;
                case 2: enemy_pos[1] = '3';
                        break;
                case 3: case 5: enemy_pos[1] = '2a';
                        break;
            }
        } else if (enemy_pos[1] == '3') {
            switch (genRandom(3)) {
                case 1: enemy_pos[1] = '2a';
                        break;
                case 2: enemy_pos[1] = '2b';
                        break;
                case 3: enemy_pos[1] = '1b';
                        break;
            }
        } else if (enemy_pos[1] == 'ld') {
            tryToKill(1);
        }
    }
    console.log(enemy_pos[1]);
    return enemy_pos[1];
}

function moveBonnie() {
    //return 0;
    if (genRandom() <= difficulty[1]) {
        if (enemy_pos[1] == '1a') {
            enemy_pos[1] = '1b';
        } else if (enemy_pos[1] == '1b') {
            enemy_pos[1] = '2a';
        } else if (enemy_pos[1] == '2a') {
            switch (genRandom(3)) {
                case 1: enemy_pos[1] = '2b';
                        break;
                case 2: enemy_pos[1] = '3';
                        break;
                case 3: enemy_pos[1] = '2a';
                        break;
            }
        } else if (enemy_pos[1] == '2b') {
            switch (genRandom(5)) {
                case 1: case 4: enemy_pos[1] = 'ld';
                        $('#leftlight').attr('src', "assets/images/office/office_leftlight_bonnie.png");
                        break;
                case 2: enemy_pos[1] = '3';
                        break;
                case 3: case 5: enemy_pos[1] = '2a';
                        break;
            }
        } else if (enemy_pos[1] == '3') {
            switch (genRandom(3)) {
                case 1: enemy_pos[1] = '2a';
                        break;
                case 2: enemy_pos[1] = '2b';
                        break;
                case 3: enemy_pos[1] = '1b';
                        break;
            }
        } else if (enemy_pos[1] == 'ld') {
            tryToKill(1);
        }
    }
    console.log(enemy_pos[1]);
    return enemy_pos[1];
}

function moveChica() { // 1a, 1b, 4a, 4b, 6, 7
    if (genRandom() <= difficulty[2]) {
        if (enemy_pos[2] == '1a') {
            enemy_pos[2] = '1b';
        } else if (enemy_pos[2] == '1b') {
            switch (genRandom(3)) {
                case 1: enemy_pos[2] = '6';
                        break;
                case 2: enemy_pos[2] = '4a';
                        break;
                case 3: enemy_pos[2] = '7';
                        break;
            }
        } else if (enemy_pos[2] == '4a') {
            switch (genRandom(4)) {
                case 1: enemy_pos[2] = '6';
                        break;
                case 2: enemy_pos[2] = '7';
                        break;
                case 3: enemy_pos[2] = '1b';
                        break;
                case 4: enemy_pos[2] = '4b';
                        break;
            }
        } else if (enemy_pos[2] == '4b') {
            switch (genRandom(6)) {
                case 1: enemy_pos[2] = '4a';
                        break;
                case 2: enemy_pos[2] = '6';
                        break;
                case 3: enemy_pos[2] = '7';
                        break;
                case 4: enemy_pos[2] = '1b';
                        break;
                case 5: case 6: enemy_pos[2] = 'rd';
                                $('#rightlight').attr('src', "assets/images/office/office_rightlight_chica.png");
                                break;
            }
        } else if (enemy_pos[2] == '7') {
            switch (genRandom(4)) {
                case 1: enemy_pos[2] = '6';
                        break;
                case 2: enemy_pos[2] = '4b';
                        break;
                case 3: enemy_pos[2] = '1b';
                        break;
                case 4: enemy_pos[2] = '4a';
                        break;
            }
        } else if (enemy_pos[2] == '6') {
            switch (genRandom(3)) {
                case 1: enemy_pos[2] = '4a';
                        break;
                case 2: enemy_pos[2] = '4b';
                        break;
                case 3: enemy_pos[2] = '1b';
                        break;
                case 4: enemy_pos[2] = '7';
            }
        } else if (enemy_pos[2] == 'rd') {
            tryToKill(2);
        }
    }
    console.log(enemy_pos[2]);
    return enemy_pos[2];
}

function tryToKill(x) {
    if (x==1) {
        if (left_door_closed) {
            switch (genRandom(5)) {
                case 1: enemy_pos[1] = '2a';
                        break;
                case 2: enemy_pos[1] = '2b';
                        break;
                case 3: case 4: enemy_pos[1] = '1b';
                        break;
                case 5: enemy_pos[1] = '3';
                        break;
            }
            $('#leftlight').attr('src', "assets/images/office/office_leftlight.png");
            //$('#')
        } else {
            enemy_pos[1] = 'ff';
            killPlayer(x);
        }
    } else if (x==2) {
        if (right_door_closed) {
            switch (genRandom(6)) {
                case 1: enemy_pos[2] = '4a';
                        break;
                case 2: enemy_pos[2] = '4b';
                        break;
                case 3: case 4: enemy_pos[2] = '1b';
                        break;
                case 5: enemy_pos[2] = '6';
                        break;
                case 6: enemy_pos[2] = '7';
                        break;
            }
            $('#rightlight').attr('src', "assets/images/office/office_rightlight.png");
            //$('#')
        } else {
            enemy_pos[2] = 'ff';
            killPlayer(x);
        }
    }
}


function killPlayer(x) {
    switch (x) {
        case 0: playFreddyJumpscareAnim();
                break;
        case 1: playBonnieJumpscareAnim();
                break;
        case 2: playChicaJumpscareAnim();
                break;
        /* case 3: playFoxyJumpscareAnim();
                break; */
        default: console.log("[ERROR] Could not play jumpscare (invalid ID)");
                break;
    }
}
