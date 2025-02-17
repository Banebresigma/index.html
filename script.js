function bet(team, odds) {
    alert("Opklada na " + team + " po kvoti " + odds);
}

function spinRoulette() {
    let number = Math.floor(Math.random() * 36);
    document.getElementById("rouletteResult").innerText = "Broj: " + number;
}
