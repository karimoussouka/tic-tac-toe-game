import Game from "./Game.js";

import GameView from "./GameView.js";

let game = new Game();

let gameView = new GameView();

let tiles = document.querySelectorAll(".board-title");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileCLick(tile.dataset.index);
    });
});

const onTileCLick = (i) => {
    game.makeMove(i);
    gameView.updateBoard(game);
};

document.querySelector(".restart").addEventListener("click", () => {
    newGameClick();
});

const newGameClick = () => {
    game = new Game();
    gameView.updateBoard(game);
};

gameView.updateBoard(game);