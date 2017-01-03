export class Game {
	playerCreator: any;
	status: string;				// status = 'pendent'; 'progress', 'ended' 
	beginDate: any;	
	endDate: any;
	winnerPlayer: string;
	gamePlayers: any = []; 		
	totPlayers: number = 0;	
	totWaitingPlayers: number = 0;
	duration: number = 0;

	constructor(playerCreator: any, beginDate: any, status: string) {  
		this.playerCreator = 1;			//test
		//this.status = 'pendent';	
		this.status = 'progress';
		this.beginDate = Date.now();
	}
}	