function update_1a() {
    if (enemy_pos[0] == "1a" && enemy_pos[1] == "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_all.png");
    } else if (enemy_pos[0] == "1a" && enemy_pos[1] != "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_freddy_chica.png");
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] == "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_freddy_chica.png");
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] != "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_all.png");
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] != "1a" && enemy_pos[2] != "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_empty.png");
    }
}

function update_1b() {
    if (enemy_pos[1] != "1b" && enemy_pos[2] != "1b") {
        changeTabletView("assets/images/camera/dining_room/dining_room_empty.png");
    } else if (/*enemy_pos[1] != "1a" && */enemy_pos[2] == "1b") {
        changeTabletView("assets/images/camera/dining_room/dining_room_bonnie_1.png");
    } else if (enemy_pos[1] == "1b"/* && enemy_pos[2] != "1a"*/) {
        changeTabletView("assets/images/camera/dining_room/dining_room_chica_1.png");
    }
}

function update_1c() {
    /* if (enemy_pos[0] == "1a" && enemy_pos[1] == "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_all.png");
    } else if (enemy_pos[0] == "1a" && enemy_pos[1] != "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_freddy_chica.png");
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] == "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_freddy_chica.png");
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] != "1a" && enemy_pos[2] == "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_all.png");
    } else if (enemy_pos[0] != "1a" && enemy_pos[1] != "1a" && enemy_pos[2] != "1a") {
        changeTabletView("assets/images/camera/show_stage/show_stage_empty.png");
    } */
    changeTabletView("assets/images/camera/pirate_cove_1.png");
}

function update_5() {
    if (enemy_pos[1] == "5") {
        switch (genRandom(5)) {
            case 1: case 2: case 3: case 4: changeTabletView("assets/images/camera/backstage/backstage_bonnie.png"); break;
            case 5: changeTabletView("assets/images/camera/backstage/backstage_bonnie_creepy.png");
        }
    } else {
        switch (genRandom(5)) {
            case 1: case 2: case 3: case 4: changeTabletView("assets/images/camera/backstage/backstage_empty.png"); break;
            case 5: changeTabletView("assets/images/camera/backstage/backstage_empty_creepy.png");
        }
    }
}

function update_6() {

}

function update_7() {

}

function update_2a() {

}

function update_2b() {

}

function update_4a() {

}

function update_4b() {

}
