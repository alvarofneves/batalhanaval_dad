import { Component, Input, OnInit } from '@angular/core';

<<<<<<< HEAD
import { Subscription }   from 'rxjs/Subscription';
import {GameService} from "../_services/index";
import {MultiComponentService} from "../_services/multiComponent.service";
import { BoardClass} from "./boardClass";
import { BoatClass } from "./boatClass";
import { CellClass } from "./cellClass";
=======
import { BoardClass} 		from "./boardClass";
import { BoatClass } 		from "./boatClass";
import { CellClass } 		from "./cellClass";
import { WebSocketService } from '../_services/index';
>>>>>>> websockets-tiros-v2

@Component({
	moduleId: module.id,
	selector: 'game-board',	
	templateUrl: 'board.component.html',
<<<<<<< HEAD
	styleUrls: ['./board.component.css'],
	providers: [GameService, MultiComponentService]
})

export class BoardComponent {
	private id:number;
	private cells: CellClass[];
	private boats: BoatClass[];
	subscription: Subscription;
	flag: boolean;
=======
	styleUrls: ['./board.component.css']
})

export class BoardComponent { 
	public id: number;
	public cells: CellClass[];
	public elementos: number[] = [];
	
	public constructor(private wsService: WebSocketService){
		/*this.id = 0;
		
		let board = new BoardClass();

		let aircraft = new BoatClass("aircraft");
		
		let battleship = new BoatClass("battleship");

		let cruiser1 = new BoatClass("cruiser");

		let cruiser2 = new BoatClass("cruiser");
		
		let destroyer1 = new BoatClass("destroyer");
>>>>>>> websockets-tiros-v2

	public constructor(private gameService: GameService, private multiComponentService: MultiComponentService/*id*/){
		let board = new BoardClass();
		this.id = board.getId();
		this.gameService.addGame(board);
		this.flag=false;
		this.boats = this.gameService.getBoats();
		this.subscription = multiComponentService.boatPlacement$.subscribe((f : any) => this.flag = f);
		console.log(this.flag);
		
		//board.addBoat(new CellClass(2,2), aircraft);
		
<<<<<<< HEAD
		//this.randomAddBoats(board);  // AS coment
		//console.table(board.getCells());
=======
		board.addBoat(new CellClass(2,2), aircraft);*/
>>>>>>> websockets-tiros-v2
	}

	ngOnInit() {
        this.elementos = [];
        this.wsService.getBoardMessages().subscribe((m:any) => {
        	this.elementos = m;
            console.log(m);
        });
    }
	
<<<<<<< HEAD
	public getLabel(currentRow) {
		 return String.fromCharCode(65+currentRow);
	}

	public cellClick(l,i){
		if(this.flag==true){
			console.log("placing boat at:"+this.id+"-"+l+":"+i);
		}
		console.log(this.flag);
	}

	/*
	public randomAddBoats(board:BoardClass){
		let randomCoord = 0;
		let result = 0;
		
		for(let boat of this.boats){
			do {
				randomCoord = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
				console.log("random:"+randomCoord);

				result = board.addBoat(board.getCells()[randomCoord], boat)
				console.log("result:"+result);
			}while (result == -1)
		}
	} */
=======
	clickElemento(index: number){
        this.wsService.sendClickElementMessage(index);
        console.log(index);
    }

    getColor(elemento: number){
        switch (elemento) {
            case 0: return 'lightgray';
            case 1: return 'blue';
            case 2: return 'red';
        }
        return 'white';
    }

	// função do TIAGO
	//public clickElemento(l,i){
		//console.log(this.id+"-"+l+":"+i);
	//}

	//public getLabel(currentRow) {
		//return String.fromCharCode(65+currentRow);
	//}
>>>>>>> websockets-tiros-v2
}