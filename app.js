let cells = document.querySelectorAll('.cell');
let currentPlayerSymbol = "X";
let banner = document.querySelector("banner");

let c1 = document.getElementById("1")
let c2 = document.getElementById("2")
let c3 = document.getElementById("3")
let c4 = document.getElementById("4")
let c5 = document.getElementById("5")
let c6 = document.getElementById("6")
let c7 = document.getElementById("7")
let c8 = document.getElementById("8")
let c9 = document.getElementById("9")

banner.style.display = "none";

let winCombos = [
    [c1, c2, c3],
    [c4, c5, c6],
    [c7, c8, c9],
    [c1, c5, c9],
    [c3, c5, c7],
    [c2, c5, c8],
    [c3, c6, c9],
    [c1, c4, c7],

]

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});

function winCheck() {
    for (i = 0; i < winCombos.length; i++) {
        let counter = 0;
        var wins = Wincombos[i].length;
        for (var j = 0; wins.length; j++) {
            let winCell = WinCombos[i][j].textContent;
            if (winCell == currentPlayerSymbol) {
                counter++
                if (counter == 3) {
                    banner.textContent = (currentPlayerSymbol + " LuckyWinner!");
                    banner.style.display = "block";
                }
            }

        }
    }
}

function cellClicked(e) {
    e.target.innerHTML = currentPlayerSymbol;
    if (currentPlayerSymbol == "X") {
        currentPlayerSymbol = "O"
    } else {
        currentPlayerSymbol = "X"
    }

}


