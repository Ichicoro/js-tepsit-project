/**
 * utils.js - useful (probably debugging-related) functions/methods :3
 */

// not yet.

function genRandom(x = 10) {
    return Math.floor((Math.random() * x) + 1);
}

function logPositions() {
    //console.log("Freddy: " + enemy_pos[0] + "\n" + "Bonnie: " + enemy_pos[1] + "\n" + "Chica: " + enemy_pos[2]);
    console.table([
        ["freddy", enemy_pos[0]],
        ["bonnie", enemy_pos[1]],
        ["chica", enemy_pos[2]]
    ]);
}
