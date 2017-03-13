/**
 * game.js -- game code
 *
 * I 4 animatronic in ordine sono Freddy, Bonnie, Chica e Foxy
 *
 */

function changeBackground(x) {
    $('#backgroundimg').attr('src', x);
}


function drainPower() {
    var powerdraw = DRAIN_PER_SECOND;
    if (left_door_closed) { powerdraw++; };
    if (right_door_closed) { powerdraw++; };

}


function toggleTablet() {
    if (tablet_enabled) {
        if (tablet_active) {
            turnOffTablet();
        } else {
            turnOnTablet();
        }
        console.log('tablet_active = ' + tablet_active);
    } else {
        console.log("Can't open the tablet. Is the player dead already?");
        return false;
    }
}

function turnOffTablet() {
    // Qui disattiviamo il tablet, attivando prima gli overlay (ovvero il ventilatore, le porte, ecc.)
    $('#overlays').show();
    $('#tabletui').hide();
    tablet_active = false;
}

function turnOnTablet() {
    // Qui attiviamo il tablet, disattivado prima gli overlay (ovvero il ventilatore, le porte, ecc.)
    $('#overlays').hide();
    $('#tabletui').show();
    tablet_active = true;
}

function updateTabletView() {
    
}


function enableEnemies() {
    if (ai_enabled) {
        AI_TIMER = setInterval(moveEnemies, MOVE_INTERVAL)
    }

}

function moveEnemies() {
    /**
     *  1a is the show stage, or the "starting room" for bonnie, freddy and Chica.
     *  1b is the dining room.
     *  1c-[0..2] is the Pirate Cove, where Foxy stays until s/he runs to the office (ff) through the left-side corridors (2[a-b]).
     *  5 is the repair room, only Freddy can get here.
     *  7 is the bathrooms, only Chica can get here.
     *  6 is the kitchen. Only Chica and Freddy can get here and there's no video feed.
     *  2a and 2b are the left-side corridors. Beware Bonnie and Foxy!
     *  4a and 4b are the right-side corridors. Beware Chica and Freddy!
     *  ff is the office.
     *  ld is the left office door
     *  rd is the right office door
     */

    switch (genRandom(4)) {
        case 1: moveFreddy();
                break;
        case 2: moveBonnie();
                break;
        case 3: moveChica();
                break;
        case 4: moveFoxy();
                break;
    }

    updateTabletView();
}

function genRandom(x) {
    if (isNaN(x)) {
        return Math.floor((Math.random() * 10) + 1);
    } else {
        return Math.floor((Math.random() * x) + 1);
    }
}


function moveFreddy() {
    // Uhh I'm gonna work on this later.
}

function moveBonnie() {
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
            switch (genRandom(3)) {
                case 1: enemy_pos[1] = 'ld';
                        break;
                case 2: enemy_pos[1] = '3';
                        break;
                case 3: enemy_pos[1] = '2a';
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

function moveChica() {
    // Uhh I'm gonna work on this later.
}

function moveFoxy() {
    // Uhh I'm gonna work on this later.
}

function tryToKill(x) {
    if (x==1) {
        if (left_door_closed) {
            switch (genRandom(4)) {
                case 1: enemy_pos[1] = '2a';
                        break;
                case 2: enemy_pos[1] = '2b';
                        break;
                case 3: enemy_pos[1] = '1b';
                        break;
                case 4: enemy_pos[1] = '3';
                        break;
            }
        } else {
            enemy_pos[1] = 'ff';
            killPlayer(x);
        }
    } else if (x==3) {
        // Foxy is... kinda special.
    } else if (x==2) {
        right_door_closed ? console.log("the right door is closed :(") : killPlayer(x);
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
        case 3: playFoxyJumpscareAnim();
                break;
    }
}