function update_1a() {
    if (enemy_pos[0] == "1a" && enemy_pos[1] == "1a" && enemy_pos[2] == "1a") {
        switch (genRandom(10)) {
            case 1: changeTabletView("assets/images/camera/show_stage/show_stage_all_creepy.png"); break;
            default: changeTabletView("assets/images/camera/show_stage/show_stage_all.png"); break;
        }
    } else if (enemy_pos[0] == "1a" && enemy_pos[1] != "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_freddy_chica.png");
    } else if (enemy_pos[0] == "1a" && enemy_pos[1] == "1a" && enemy_pos[2] != "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_freddy_bonnie.png");
    } else if (enemy_pos[0] == "1a" && enemy_pos[1] != "1a" && enemy_pos[2] != "1a") {
        switch (genRandom(5)) {
            case 1: changeTabletView("assets/images/camera/show_stage/show_stage_freddy_creepy.png"); break;
            default: changeTabletView("assets/images/camera/show_stage/show_stage_freddy.png"); break;
        }
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] != "1a" && enemy_pos[2] != "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_empty.png");
    }
    setCamText("Show Stage");
}

function update_1b() {
    if (enemy_pos[1] != "1b" && enemy_pos[2] != "1b") {
        changeTabletView("assets/images/camera/dining_room/dining_room_empty.png");
    } else if (enemy_pos[1] != "1b" && enemy_pos[2] == "1b") {
        changeTabletView("assets/images/camera/dining_room/dining_room_chica_1.png");
    } else if (enemy_pos[1] == "1b" && enemy_pos[2] != "1b") {
        changeTabletView("assets/images/camera/dining_room/dining_room_bonnie_1.png");
    } else if (enemy_pos[1] == "1b" && enemy_pos[2] == "1b") {
        changeTabletView("assets/images/camera/dining_room/dining_room_bonnie_chica.png");
    }
    setCamText("Dining Room");
}

function update_1c() {
    changeTabletView("assets/images/camera/pirate_cove_1.png");
    setCamText("Pirate Cove");
}

function update_3() {
    if (enemy_pos[1] == "3") {
        changeTabletView("assets/images/camera/supply_closet/supply_closet_bonnie.png");
    } else {
        changeTabletView("assets/images/camera/supply_closet/supply_closet_empty.png");
    }
    setCamText("Supply Closet");
}

function update_5() {
    if (enemy_pos[1] == "5") {
        switch (genRandom(5)) {
            case 1: changeTabletView("assets/images/camera/backstage/backstage_bonnie_creepy.png"); break;
            default: changeTabletView("assets/images/camera/backstage/backstage_bonnie.png"); break;
        }
    } else {
        switch (genRandom(5)) {
            case 1: changeTabletView("assets/images/camera/backstage/backstage_empty_creepy.png"); break;
            default: changeTabletView("assets/images/camera/backstage/backstage_empty.png"); break;
        }
    }
    setCamText("Backstage");
}

function update_6() {
    changeTabletView("assets/images/camera/kitchen.png");
    setCamText("Kitchen [AUDIO ONLY]");
}

function update_7() {
    if (enemy_pos[0] == "7" && enemy_pos[2] == "7") {
        changeTabletView("assets/images/camera/restroom/restroom_freddy_chica.png");
    } else if (enemy_pos[0] == "7") {
        changeTabletView("assets/images/camera/restroom/restroom_freddy.png");
    } else if (enemy_pos[2] == "7") {
        switch (genRandom(5)) {
            case 1: changeTabletView("assets/images/camera/restroom/restroom_chica_creepy.png"); break;
            default: changeTabletView("assets/images/camera/restroom/restroom_chica.png"); break;
        }
    } else {
        changeTabletView("assets/images/camera/restroom/restroom_empty.png");
    }
    setCamText("Restroom");
}

function update_2a() {
    if (enemy_pos[1] == "2a") {
        changeTabletView("assets/images/camera/left_corridor/left_corridor_bonnie.png");
    } else {
        if (genRandom(20) == 20) {
            changeTabletView("assets/images/camera/left_corridor/left_corridor_off.png");
        } else {
            changeTabletView("assets/images/camera/left_corridor/left_corridor_empty.png");
        }
    }
    setCamText("Left Corridor");
}

function update_2b() {
    if (enemy_pos[1] == "2b") {
        switch (genRandom(5)) {
            case 1: changeTabletView("assets/images/camera/left_corner/left_corner_bonnie_creepy.png"); break;
            default: changeTabletView("assets/images/camera/left_corner/left_corner_bonnie.png"); break;
        }
    } else {
        changeTabletView("assets/images/camera/left_corner/left_corner_empty.png");
    }
    setCamText("Left Corner");
}

function update_4a() {
    if (enemy_pos[0] == "4a" && enemy_pos[2] == "4a") {
        changeTabletView("assets/images/camera/right_corridor/right_corridor_freddy_chica.png");
    } else if (enemy_pos[0] == "4a") {
        changeTabletView("assets/images/camera/right_corridor/right_corridor_freddy.png");
    } else if (enemy_pos[2] == "4a") {
        changeTabletView("assets/images/camera/right_corridor/right_corridor_chica.png");
    } else {
        switch (genRandom()) {
            case 1: case 2: changeTabletView("assets/images/camera/right_corridor/right_corridor_empty_itsme.png"); break;
            case 3: case 4: changeTabletView("assets/images/camera/right_corridor/right_corridor_empty_crying.png"); break;
            default: changeTabletView("assets/images/camera/right_corridor/right_corridor_empty.png");break;
        }
    }
    setCamText("Right Corridor");
}

function update_4b() {
    if (enemy_pos[2] == "4b") {
        switch (genRandom(5)) {
            case 1: changeTabletView("assets/images/camera/right_corner/right_corner_chica_creepy.png"); break;
            default: changeTabletView("assets/images/camera/right_corner/right_corner_chica.png"); break;
        }
    } else if (enemy_pos[0] == "4b") {
        changeTabletView("assets/images/camera/right_corner/right_corner_freddy_creepy.png");
    } else {
        switch (genRandom()) {
            case 1: changeTabletView("assets/images/camera/right_corner/right_corner_empty_1.png"); break;
            case 2: changeTabletView("assets/images/camera/right_corner/right_corner_empty_2.png"); break;
            case 3: changeTabletView("assets/images/camera/right_corner/right_corner_empty_3.png"); break;
            case 4: changeTabletView("assets/images/camera/right_corner/right_corner_empty_4.png"); break;
            default: changeTabletView("assets/images/camera/right_corner/right_corner_empty.png"); break;
        }
    }
    setCamText("Right Corner");
}
