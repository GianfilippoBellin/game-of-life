import { Component, NgModule } from '@angular/core';
import { Board } from './board.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* @NgModule({
    imports: [MatButtonModule]
  }) */

export class AppComponent {
  numCols: number;
  numRows: number;
  generation: number;
  pausa: boolean;
  board: Board;

  constructor() {
    this.numCols = 40;
    this.numRows = 40;
    this.generation = 0;
    this.pausa = true;
    this.board = new Board(this.numCols, this.numRows);
  }

/*   onClick(row: any, col: any) {
    this.board.changeStatus(row, col);
  } */

  onClickPausa() {
    this.pausa = this.pausa === false ? true: false;
  }

  onClickRestart(){
    this.board = new Board(this.numCols, this.numRows);
  }

  ngOnInit() {
    setInterval(() => {
      if (this.pausa === true) {
        this.board.checkBoard();
        this.generation++
      }
    }, 500);
  }

}
