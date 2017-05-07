function playFreddyJumpscareAnim() {
    $('#overlays').hide();
    $('#jumpscare').show();
    $('#jumpscare').attr("src", "assets/images/jumpscares/freddy_jumpscare.gif");
    screamaudio.play();
    setTimeout(() => {
        $('#jumpscare').hide();
        screamaudio.pause();
        location.reload();
    }, 1450);
}

function playBonnieJumpscareAnim() {
    $('#overlays').hide();
    $('#jumpscare').show();
    $('#jumpscare').attr("src", "assets/images/jumpscares/bonnie_jumpscare.gif");
    screamaudio.play();
    setTimeout(function() {
        $('#jumpscare').hide();
        screamaudio.pause();
        location.reload();
    }, 1500);
}

function playChicaJumpscareAnim() {
    $('#overlays').hide();
    $('#jumpscare').show();
    $('#jumpscare').attr("src", "assets/images/jumpscares/chica_jumpscare.gif");
    screamaudio.play();
    setTimeout(() => {
        $('#jumpscare').hide();
        screamaudio.pause();
        location.reload();
    }, 1500);
}
