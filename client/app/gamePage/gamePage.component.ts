import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'game-page',	
	templateUrl: 'gamePage.component.html',
	styleUrls: ['./gamePage.component.css']
})

export class GamePageComponent {
	/*private boards: BoardComponent[];
	private allbBoardsReady: boolean;

	public constructor(numBoards, allBoardsReady) {
		this.allbBoardsReady = allBoardsReady;
		
		if(!allBoardsReady) {
			this.addBoard();
		} else {
			for (let i = 0; i < numBoards; i++) {
				this.addBoard();
			}
		}
	}*/

	public endGame() {
		console.log('end game client');
	}
}