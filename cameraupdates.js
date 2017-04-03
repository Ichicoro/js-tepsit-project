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

}

function update_1c() {

}

function update_5() {

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
