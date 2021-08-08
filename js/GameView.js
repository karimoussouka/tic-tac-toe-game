export default class GameView {
    constructor() {}

    updateBoard = (game) => {
        this.updateTurn(game);
        const wininng = game.findWinningCombinations();

        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-title[data-index='${i}']`);
            tile.textContent = game.board[i];

            tile.classList.remove("tile-win");

            let classTYpe = game.board[i] == "X" ? "X-color" : "O-color";

            tile.innerHTML = `<span class="${classTYpe}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

            if (wininng && wininng.includes(i)) {
                tile.classList.add("tile-win");
            }
        }
    };

    updateTurn = (game) => {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");

        if (game.turn == "X") {
            playerX.classList.add("active");
            playerO.classList.remove("active");
        } else {
            playerO.classList.add("active");
            playerX.classList.remove("active");
        }
    };
}