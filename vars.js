/**
 * vars.js -- all-things variables!
 */

var office_nolights = 'assets/images/office_nolights.png';

var fanimg_path = 'assets/images/fan/';

var leftdoorimg_closed = 'assets/images/office/left_door_closed.png';

var camerabutton = 'assets/images/buttons/camerabutton.png';

var fans = [57, 59, 60];   // nomi dei frame per la ventola
var fan_timer = 3;

var tablet_enabled = true;
var tablet_active = false;
var tablet_camera = "1a";
var tablet_noise;
var tablet_noise_timer = 1;

var animations_enabled = true;

var left_door_closed = false;
var left_light_on = false;

var right_door_closed = false;
var right_light_on = false;

var dead = false;

var ai_enabled = true;
var difficulty = [6, 6, 6];
var enemy_pos = ["1a", "1a", "1a"]; // freddy, bonnie, chica and foxy
var default_enemy_pos = ["1a", "1a", "1a"]; // freddy, bonnie, chica and foxy

var MOVE_INTERVAL = 5000;   // movement interval (5s = 5000ms)
var END_TIME = 360000;      // night duration (6m = 360000ms)
var DRAIN_PER_SECOND = 0.25;   // energy drain/s => 360000ms/100
var DOOR_DRAIN_PER_SECOND = 0.5;
var BATTERY_TIMER;
var BATTERY_LEVEL = 200;
var BATT_USAGE_NUM;

var timers = [];
var clock;
var clock_timer;

var AI_TIMER;
