
var cameraaudio = new Audio("assets/sounds/blip3.wav");
var screamaudio = new Audio("assets/sounds/XSCREAM.wav");
var tablettoggleaudio = new Audio("assets/sounds/tablet.wav");
var windowscareaudio = new Audio("assets/sounds/windowscare.wav");
var fannoise = new Audio("assets/sounds/fan.wav");
var musicbox = new Audio("assets/sounds/musicbox.wav");
var dingdongdang = new Audio("assets/sounds/chimes.wav");
var victoryaudio = new Audio("assets/sounds/yay.wav");
var shutdownaudio = new Audio("assets/sounds/powerdown.wav");
var dooraudio = new Audio("assets/sounds/door.wav");

function playAudio(x = 0) {
    switch (x) {
        case 1: cameraaudio.play();
                break;
    }
}
