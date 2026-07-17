const board = document.getElementById("board");


const pieces = [
    "♜","♞","♝","♛","♚","♝","♞","♜",
    "♟","♟","♟","♟","♟","♟","♟","♟",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","",
    "♙","♙","♙","♙","♙","♙","♙","♙",
    "♖","♘","♗","♕","♔","♗","♘","♖"
];


for(let i = 0; i < 64; i++){

    let square = document.createElement("div");

    square.classList.add("square");


    if((Math.floor(i/8)+i)%2==0){
        square.classList.add("white");
    }
    else{
        square.classList.add("black");
    }


    square.innerHTML = pieces[i];


    board.appendChild(square);
}
