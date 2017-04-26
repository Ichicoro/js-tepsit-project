/**
 * utils.js - useful (probably debugging-related) functions/methods :3
 */

// not yet.

function genRandom(x) {
    if (isNaN(x)) {
        return Math.floor((Math.random() * 10) + 1);
    } else {
        return Math.floor((Math.random() * x) + 1);
    }
}
