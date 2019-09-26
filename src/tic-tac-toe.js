class TicTacToe {
    constructor() {
   this.playground = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.player1 = 'x';
        this.player2 = 'o';
        this.fullplayground = 0;
        this.currentPlayerSymbol = this.player1;
    }

    getCurrentPlayerSymbol() {
return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
if (this.playground[rowIndex][columnIndex] == null) {
            this.playground[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.fullplayground++;
            if (this.currentPlayerSymbol == this.player1) {
                this.currentPlayerSymbol = this.player2;
            } else { this.currentPlayerSymbol = this.player1 }
        }
        return this.currentPlayerSymbol;
    }

    isFinished() {
  if (this.getWinner()) {
            return true
        } else {
            for (let i = 0; i < 3; i++) {
                if (this.playground[i].indexOf(null) > -1) {
                    return false;
                }
            }
            return true
        }
    }

    getWinner() {
    let winner = null;
        for (let i = 0; i < 3; i++) {
            if (this.playground[i][0] == this.playground[i][1] && this.playground[i][1] == this.playground[i][2]) {
                winner = this.playground[i][0];
            }
            if (this.playground[0][i] == this.playground[1][i] && this.playground[1][i] == this.playground[2][i]) {
                winner = this.playground[0][i];
            }
        }

        if (this.playground[0][0] == this.playground[1][1] && this.playground[1][1] == this.playground[2][2]) {
            winner = this.playground[0][0];
        }
        if (this.playground[0][2] == this.playground[1][1] && this.playground[1][1] == this.playground[2][0]) {

            winner = this.playground[0][2];
        }
        return winner;

    }

    noMoreTurns() {
 return this.fullplayground == 9;
    }

    isDraw() {
 if (!this.isFinished() || this.getWinner()) {
            return false
        }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
  return this.playground[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
