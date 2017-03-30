document.addEventListener('DOMContentLoaded', startGame)

// board size
var rowLength = 6;
var colLength = 6;
var board = {
  cell: []
};



function startGame () {
  createBoard();
  for (var i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);

    document.addEventListener('click', checkForWin)
    document.addEventListener('contextmenu', checkForWin)
}

    lib.initBoard();
}


//Check for a win in the board

function createBoard () {
 for (var x = 0; x <= rowLength; x++) {
  for (var y = 0; y <= colLength; y++) {
    var newCell = {
      row: x,
      col: y,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }
     board.cells.push(newCell);
   }
  }
}
  var mineCount = 0;
  var maxMines = 4;
  while (mineCount < maxMines) {
    var randomCell = Math.floor(Math.random() * 25)
    if (board.cells[randomCell].isMine === false) {
        (board.cells[randomCell].isMine = true)
          mineCount ++
      }
}

function checkForWin () {
  var i = 0;
  for(i = 0; i < board.cell.length; i++) {
    if ((board.cell[i].isMine == true) && (board.cell[i].isMarked !== true)) {
      return;
   } // if the cell is possibly a mine and is not marked return to game
     else if ((board.cell[i].isMarked !== true) && (board.cell[i].hidden == true)) {
      return
   } // all mines are marked but some are hidden return to the game

}
    // player wins and the winner message is displayed
     lib.displayMessage('You win!');
      return;
  }

function countSurroundingMines (cell)  {
    var count = 0;
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    for (var i = 0; i < surrounding.length; i++) {
        if (surrounding[i].isMine === true) {
            count++;
     }
     return count;
}
}
