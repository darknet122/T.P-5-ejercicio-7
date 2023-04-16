//Hacer un juego de piedra, papel y tijera

const Piedra = "piedra";
const Papel = "papel";
const Tijera = "tijeras";

const Tire = 0;
const Ganar = 1;
const Perder = 2;

let isPlaying = false;

const rockBtn = document.getElementById("piedra");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("tijeras");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
    play(Piedra);
});
paperBtn.addEventListener("click", () => {
    play(Papel);
});
scissorsBtn.addEventListener("click", () => {
    play(Tijera);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Elegir!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        switch (result) {
            case Tire:
                resultText.innerHTML = "Tu tienes que tirar!";
                break;
            case Ganar:
                resultText.innerHTML = "Tu ganas!";
                break;
            case Perder:
                resultText.innerHTML = "Tu pierdes!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return Piedra;
        case 1:
            return Papel;
        case 2:
            return Tijera;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return Tire;

    } else if (userOption === Piedra) {

        if (machineOption === Papel) return Perder;
        if (machineOption === Tijera) return Ganar;

    } else if (userOption === Papel) {

        if (machineOption === Tijera) return Perder;
        if (machineOption === Piedra) return Ganar;

    } else if (userOption === Tijera) {

        if (machineOption === Piedra) return Perder;
        if (machineOption === Papel) return Ganar;

    }
}