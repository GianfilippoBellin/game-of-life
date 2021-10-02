import { from } from "rxjs";

export class Board {
    board: number[][];

    constructor(width: number, height: number) {
        this.board = [];
        for (let i = 0; i < width; i++) {
            this.board[i] = [];
            for (let j = 0; j < height; j++) {
                this.board[i][j] = this.RandomIntFromInterval(0,1);
            }
        }
    }

    RandomIntFromInterval(min: number, max: number): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    status(x: number, y: number): number {
        return this.board[x][y];
    }

    changeStatus(x: number, y: number) {
        this.board[x][y] = this.board[x][y] == 0 ? 1 : 0;
    }

    checkBoard() {
        let tmpBoard:number[][] = [];

        for (let i = 0; i < this.board.length; i++) {
            tmpBoard[i] = [];
            for (let j = 0; j < this.board[i].length; j++) {
                tmpBoard[i].push(this.checkRules(i, j));
            }
        }
        this.board = [...tmpBoard];
    }

    checkRules(x: number, y: number): number {
        const width = this.board.length;
        const height = this.board[0].length;

        const xLess = x - 1 < 0 ? width - 1 : x - 1;
        const xPlus = x + 1 >= width ? 0 : x + 1;
        const yLess = y - 1 < 0 ? height - 1 : y - 1;
        const yPlus = y + 1 >= height ? 0 : y + 1;

        const currentStatus = this.board[x][y];

        const neiborhood =
            this.board[xLess][yLess] +
            this.board[xLess][y] +
            this.board[xLess][yPlus] +
            this.board[x][yLess] +
            this.board[x][yPlus] +
            this.board[xPlus][yLess] +
            this.board[xPlus][y] +
            this.board[xPlus][yPlus];

        var result = 0;

        if (currentStatus === 1) {
            console.log(currentStatus);
        }

        if (currentStatus === 1 && (neiborhood === 2 || neiborhood === 3)) {
            result = 1;
        }

        if (currentStatus === 0 && neiborhood === 3) {
            result = 1;
        }

        return result;
    }
}