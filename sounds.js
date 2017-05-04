
var cameraaudio = new Audio("assets/sounds/blip3.wav");
var screamaudio = new Audio("assets/sounds/XSCREAM.wav");

function playAudio(x = 0) {
    switch (x) {
        case 1: cameraaudio.play();
                break;
    }
}
