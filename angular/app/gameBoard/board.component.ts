import { Component } from '@angular/core';
import {BoardClass} from "./boardClass";
import {BoatClass} from "./boatClass";
import {CellClass} from "./cellClass";
//import {GameService} from "../_services/game.service";
import {GameService} from "../_services/index";
import { Subscription }   from 'rxjs/Subscription';
import {MultiComponentService} from "../_services/multiComponent.service";



@Component({
	moduleId: module.id,
	selector: 'game-board',	
	templateUrl: 'board.component.html',
	providers: [GameService, MultiComponentService],

})

export class BoardComponent {
	
	private id:number;
	
	private cells: CellClass[];
	
	private boats: BoatClass[];
	subscription: Subscription;
	flag: boolean;

	public constructor(private gameService: GameService,
					   private multiComponentService: MultiComponentService/*id*/){


		let board = new BoardClass();
		this.id = board.getId();
		this.gameService.addGame(board);
		this.flag=false;
		
		this.boats = this.gameService.getBoats();

		this.subscription = multiComponentService.boatPlacement$.subscribe(
			(f : any) => this.flag = f);

		console.log(this.flag);
		//board.addBoat(new CellClass(2,2), aircraft);

		this.randomAddBoats(board);

		//console.table(board.getCells());
	}
	
	public getLabel(currentRow) {
		 return String.fromCharCode(65+currentRow);
	}

	public cellClick(l,i){
		
		if(this.flag==true){

			console.log("placing boat at:"+this.id+"-"+l+":"+i);
		}

		console.log(this.flag);
	}

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

	}
	
}
