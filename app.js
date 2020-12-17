function throwdice () {
    var rand1 = Math.round(Math.random()*5) + 1;
    var rand2 = Math.round(Math.random()*5) + 1;
    var rand3 = Math.round(Math.random()*5) + 1;
    var rand4 = Math.round(Math.random()*5) + 1;

    document.getElementById("mydice1").src = "diceassets/d" + rand1 + ".jpg";
    document.getElementById("mydice1.1").src = "diceassets/d" + rand2 + ".jpg";
    document.getElementById("enemydice1").src = "diceassets/e" + rand3 + ".jpg";
    document.getElementById("enemydice1.1").src = "diceassets/e" + rand4 + ".jpg";
 
    var side_alt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];
    document.getElementById('mydice1').alt = side_alt[rand1-1];
    document.getElementById('mydice1.1').alt = side_alt[rand2-1];
    document.getElementById('enemydice1').alt = side_alt[rand3-1];
    document.getElementById('enemydice1.1').alt = side_alt[rand4-1];
}

// generaterandomnumber ^^^

// string concatenation make random number correspond to dice image

who_won(rand1, rand2, rand3, rand4);

function who_won (rand1, rand2, rand3, rand4) {
    let player_points = rand1 + rand2;
    let enemy_points = rand3 + rand4;
    let gifs = winner(player_points, enemy_points);
    document.getElementById("message").src = "images/" + gifs;
    document.getElementById("message").alt = gifs;
}

function winner (player, enemy) {
    if (player < enemy) {
    return "youlose.gif";
    }

    if (enemy < player) {
    return "youwon.gif";

    }

    if (player == enemy) {
    return "itsatie.gif"

    }

}