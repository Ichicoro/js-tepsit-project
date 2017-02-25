/**
 * vars.js -- all-things variables!
 */

var office_nolights = 'assets/images/office_nolights.png';

var fanimg_path = 'assets/images/fan/';

var leftdoorimg_closed = 'assets/images/doors/left/101.png';

var camerabutton = 'assets/images/buttons/camerabutton.png';

var fans = [57, 59, 60];    // nomi dei frame per la ventola
var fan_timer = 3;

var tablet_enabled = true;
var tablet_active = false;

var animations_enabled = true;

var left_door_closed = false;

var right_door_closed = false;

var difficulty = [0, 7, 4, 0];

var enemy_pos = ["1a", "1a", "1a", "1c-0"]; // freddy, bonnie, chica and foxy

var default_enemy_pos = ["1a", "1a", "1a", "1c-0"]; // freddy, bonnie, chica and foxy

var MOVE_INTERVAL = 10000;   // intervallo dei movimenti (10s = 10000ms)
var END_TIME = 360000;      // quantità di tempo perché finisca la notte (6m = 360000ms)
var DRAIN_PER_SECOND = 2;   // prosciugamento dell'energia/s => 360000ms/100
var DOOR_DRAIN_PER_SECOND = 0.5;

var timers = [];
var clock = 0;

var AI_TIMER;
