/**
 * main.js -- page-related code
 */




$('document').ready(function() {
    startGame();
    changeBackground('assets/images/office_off.png');
    $('#leftlight').attr('src', "assets/images/office/office_leftlight.png");
    $('#leftlight').hide();
    $('#rightlight').hide();
    setInterval(fanAnim, 50);
    setInterval(tabletNoiseAnim, 50);
});

function tabletNoiseAnim() {
    //$('#tabletnoise').attr('src', "assets/images/noise/noise_" + tablet_noise_timer%8 + ".png");
    //tablet_noise_timer++;
    $('#tabletnoise').attr('src', "assets/images/noise/noise_" + genRandom(8) + ".png");
}

function fanAnim() {
    var str = fanimg_path + fans[fan_timer % 3] + '.png';
    if (animations_enabled) { $('#fanimg').attr('src', str); }
    fan_timer++;
}

function setCamText(x) {
    $('#camerapos_text').text(x);
}


function startGame() {
    $('#gamearea').show();
    $('#setupmenu').hide();
    $('#camerabutton').attr('src', camerabutton);
    $('#leftdoor').attr('src', leftdoorimg_closed);
    $('#camerabutton').click(function(event) {
        toggleTablet();
    });
    turnOffTablet();
    tablet_enabled = true;
    tablet_active = false;
    animations_enabled = true;
    left_door_closed = false;
    right_door_closed = false;
    difficulty = [0, 7, 4, 0];
    enemy_pos = ["1a", "1a", "1a", "1c-0"]; // freddy, bonnie, chica and foxy
    BATTERY_TIMER = setInterval(drainPower, 1000);
    clock = Date.now();
    enableEnemies();
    clock_timer = setInterval(checkTimer, 1000);
    setInterval(updateUsage, 50);
    //setInterval(updateTabletView, 100);
}

function setView() {

}
