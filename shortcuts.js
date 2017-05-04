Mousetrap.bind("w", function(e) {
    cameraSwitchHandler("1a");
    e.preventDefault();
    return false;
});

Mousetrap.bind("2", function() {
    cameraSwitchHandler("1b");
    return false;
});

Mousetrap.bind("tab", function(e) {
    cameraSwitchHandler("3");
    e.preventDefault();
    return false;
});

Mousetrap.bind("1", function() {
    cameraSwitchHandler("5");
    return false;
});

Mousetrap.bind("r", function() {
    cameraSwitchHandler("6");
    return false;
});

Mousetrap.bind("3", function() {
    cameraSwitchHandler("7");
    return false;
});

Mousetrap.bind("q", function() {
    cameraSwitchHandler("2a");
    return false;
});

Mousetrap.bind("a", function() {
    cameraSwitchHandler("2b");
    return false;
});

Mousetrap.bind("e", function() {
    cameraSwitchHandler("4a");
    return false;
});

Mousetrap.bind("d", function() {
    cameraSwitchHandler("4b");
    return false;
});

Mousetrap.bind("space", function() {
    toggleTablet();
    return false;
});

Mousetrap.bind("z", function() {
    toggleLeftDoor();
    return false;
});

Mousetrap.bind("c", function() {
    toggleRightDoor();
    return false;
});

Mousetrap.bind("x", function() {
    toggleLeftLight();
    return false;
});
