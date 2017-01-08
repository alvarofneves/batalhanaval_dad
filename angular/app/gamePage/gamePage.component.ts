import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'game-page',	
	templateUrl: 'gamePage.component.html',
	styleUrls: ['./gamePage.component.css']
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
	
	// Quando player acabou de inserir os barcos e clica em Ready!
	public addBoardToGame(idGame: number) {
		// mostrar qts boards game já tem - debug
		//console.log(this.boards.length);

			//let board = new BoardComponent(this.boards.length);
		
		// 

		// Envio do board p 'boardsArray' desse jogo
			//this.game.push(board);
	}

	public endGame() {
		console.log('end game client');
	}
}
