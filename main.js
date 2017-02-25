/**
 * main.js -- page-related code
 */




$('document').ready(function() {
    //$('#gamearea').hide();
    startGame();
    changeBackground('assets/images/office_nolights.png');
    animations_enabled ? setInterval(fanAnim, 50);
});



function fanAnim() {
    var str = fanimg_path + fans[fan_timer % 3] + '.png';
    animations_enabled ? $('#fanimg').attr('src', str);
    fan_timer++;
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
}

function setView() {

}
