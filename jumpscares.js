function playFreddyJumpscareAnim() {

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

}
