import { Component } from '@angular/core';
import { BoardComponent } from '../gameBoard/board.component';

@Component({
	moduleId: module.id,
	selector: 'game-page',	
	templateUrl: 'gamePage.component.html',
})

export class GamePageComponent {
	/*private boards: BoardComponent[];
	private allbBoardsReady: boolean;*/

	//PLZFIX would you please call this constructor on the "Create Game" on Lobby and "Start" on Game Page? Ty.
	/*public constructor(numBoards, allBoardsReady) {
		this.allbBoardsReady = allBoardsReady;
		
		if(!allBoardsReady) {
			this.addBoard();
		} else {
			for (let i = 0; i < numBoards; i++) {
				this.addBoard();
			}
		}
	}*/
	
	/*public addBoard() {
		console.log(this.boards.length);
		let board = new BoardComponent(this.boards.length);
		
		this.boards.push(board);
	}*/
}
