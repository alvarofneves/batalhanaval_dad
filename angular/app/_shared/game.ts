export class Game {
    status: string;				// status = 'pendent'; 'progress', 'ended' 
    beginDate: any;
    playersArray: any = [];
    playersCount: number;
    playerCreator: number;
    boardsArray: any = [];
    winnerPlayer: string;
    endDate: any;
    duration: number = 0;

    constructor(playerCreator: any, beginDate: any, status: string) {
        this.status = 'pendent';	
        //this.status = 'progress';
        this.beginDate = Date.now();
        this.playersCount = 0;
    }
}	