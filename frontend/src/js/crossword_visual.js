//w- White
// b- Black
const values = [
    "bbwbbbbbbbbbbbbbbbbbb", "wwwwwwwwwbbbbbbbbbbbb", "bbwbbwbbbbbbbbbbbbbbb",
    "bbwbbwbbbbbbbbbbbbbbb", "wbwbwwwwwwwwwwwwwwwww", "wbwbbwbbbbbbbbbbbbbbb",
    "wbwbbwbbbbbbbbbbbbbbb", "wbwbbwbbbbbbbbbbbbbbb", "wbbbbwbbbbbbbbbbbbbbb",
    "wwwwwwwwwwwbbbbbbbbbb", "wbbbbwbbbbbbbbbbbbbbb", "wbbbbwbbbbbbbbbbbbbbb",
    "wbbbbwbbbbbbbbbbbbbbb", "bbbbbwbbbbbbbbbbbbbbb", "bbbbbwbbbbbbbbbbbbbbb",
    "bbbbbwbbbbbbbbbbbbbbb"
];

const ans_key = [
    "--D------------------", "ORIENTING------------", "--A--O---------------",
    "--B--T---------------", "I-E-PARTIAL BLINDNESS", "N-T--L---------------",
    "H-E-- ---------------", "E-S--B---------------", "R----L---------------",
    "IDENTIFYING----------", "T----N---------------", "E----D---------------",
    "D----N---------------", "-----E---------------", "-----S---------------",
    "-----S---------------"
];

const total_rows = values.length;
const total_cols = values[0].length;

const spans_value = {"0,2":"1", "1,0":"2", "1,5":"3", "4,0":"4", "4,4":"5", "9,0":"6"};
let current = null;

function createFrameBoxes() {
    let boxes = "";
    for (let i = 0; i < values.length; i++) {
        boxes += "<tr>";
        for (let j = 0; j < values[i].length; j++) {
            let s = spans_value[i + "," + j] ?? "";
            boxes += `<th onclick='myclick(this)' row='${i}' col='${j}' class="${values[i][j]}"><span>${s}</span><b></b></th>`;
        }
        boxes += "</tr>";
    }
    document.getElementById("table").innerHTML = boxes;
}

createFrameBoxes();

function myclick(box) {
    if (box.classList.contains("w")) {
        if (current) current.style.background = "transparent";
        current = box;
        current.style.background = "purple";
    }
}

document.body.onkeyup = function(event) {
    if (current) {
        if (event.keyCode >= 37 && event.keyCode <= 40) nextmover(event.keyCode);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            current.querySelector("b").innerHTML = event.key.toUpperCase();
            nextmover(39);
        }
        if (event.keyCode == 8 || event.keyCode == 46) current.querySelector("b").innerHTML = "";
    }
};

function nextmover(code) {
    let row = parseInt(current.getAttribute("row"));
    let col = parseInt(current.getAttribute("col"));

    switch (code) {
        case 37: col = col === 0 ? total_rows - 1 : col - 1; break;
        case 38: row = row === 0 ? total_cols - 1 : row - 1; break;
        case 39: col = col === total_cols - 1 ? 0 : col + 1; break;
        case 40: row = row === total_rows - 1 ? 0 : row + 1; break;
        default: break;
    }

    if (current.classList.contains("w")) current.style.background = "transparent";
    current = document.querySelectorAll("tr")[row].querySelectorAll("th")[col];
    if (current.classList.contains("b")) nextmover(code);
    else current.style.background = "purple";
}

let red = [], green = [];

function key_check() {
    red = [];
    green = [];
    const whites = document.querySelectorAll(".w");

    whites.forEach(element => {
        const row = element.getAttribute("row");
        const col = element.getAttribute("col");
        const text = element.querySelector("b").innerHTML;
        if (text.length > 0 && text === ans_key[row][col]) {
            element.style.background = "green";
            green.push(element);
        } else {
            element.style.background = "red";
            red.push(element);
        }
    });

    if (green.length === whites.length) console.log("Well done! :D");
}

function color_clear() {
    red.forEach(element => {
        element.style.background = "transparent";
        element.querySelector("b").innerHTML = "";
    });
    green.forEach(element => {
        element.style.background = "transparent";
    });
    red = [];
    green = [];
}
