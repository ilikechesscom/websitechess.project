let selectedSquare = null;
const board = document.getElementById("board");

const pieces = [
    ["black-rook.png","black-knight.png","black-bishop.png","black-queen.png","black-king.png","black-bishop.png","black-knight.png","black-rook.png"],
    ["black-pawn.png","black-pawn.png","black-pawn.png","black-pawn.png","black-pawn.png","black-pawn.png","black-pawn.png","black-pawn.png"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["white-pawn.png","white-pawn.png","white-pawn.png","white-pawn.png","white-pawn.png","white-pawn.png","white-pawn.png","white-pawn.png"],
    ["white-rook.png","white-knight.png","white-bishop.png","white-queen.png","white-king.png","white-bishop.png","white-knight.png","white-rook.png"]
];

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement("div");

        square.classList.add("square");
        square.classList.add((row + col) % 2 === 0 ? "white" : "black");

        if (pieces[row][col] !== "") {
    const img = document.createElement("img");
    img.src = pieces[row][col];
    img.classList.add("piece");
    square.appendChild(img);
}
if (pieces[row][col] !== "") {
    square.addEventListener("click", () => {

        if (selectedSquare) {
            selectedSquare.classList.remove("selected");
        }

        square.classList.add("selected");
        selectedSquare = square;

    });
}
        board.appendChild(square);
    }
}

let selectedSquare = null;

document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("click", () => {

        const piece = square.querySelector("img");

        // 기물 선택
        if (piece) {
            if (selectedSquare) {
                selectedSquare.style.outline = "";
            }

            selectedSquare = square;
            square.style.outline = "3px solid red";
        }

        // 이동
        else if (selectedSquare) {
            const selectedPiece = selectedSquare.querySelector("img");

            if (selectedPiece) {
                square.appendChild(selectedPiece);
            }

            selectedSquare.style.outline = "";
            selectedSquare = null;
        }

    });
});
