export class Game {
	_id: string;
	gameCreator: string;
	finished: boolean = false;
	beginDate: string;	
	endDate: string;
	winner: string;
	gamePlayers: [null]; 		// criar array
	numPlayers: number;	
	duration: number = 0;

	constructor(gameCreator: string, beginDate: string) {  
		this.gameCreator = gameCreator;
		this.beginDate = beginDate;
	}
}