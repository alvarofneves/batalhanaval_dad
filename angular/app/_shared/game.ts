export class Game {
    _id: string;
    status: string;				// status = 'pendent'; 'progress', 'ended' 
    beginDate: any;
    playersArray: any = [];
    playersCount: number;
    playersWaiting: number;
    playerCreator: number;
    boardsArray: any = [];
    playerWinner: string;
    endDate: any;
    duration: number = 0;

    constructor(playerCreator: any, beginDate: any, status: string) {
        this.status = 'pendent';	
        //this.status = 'progress';
        this.beginDate = Date.now();
        this.playersCount = 0;
        this.playersWaiting = 0;
    }
}	