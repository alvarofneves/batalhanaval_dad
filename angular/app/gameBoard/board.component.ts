import { Component } from '@angular/core';
import {BoardClass} from "./boardClass";
import {BoatClass} from "./boatClass";
import {CellClass} from "./cellClass";

@Component({
	moduleId: module.id,
	selector: 'game-board',	
	templateUrl: 'board.component.html',
})

export class BoardComponent {
	
	private id:number;
	
	private cells: CellClass[];
	
	private boats: BoatClass[];
	
	public constructor(/*id*/){
		
		this.id = 0/*id*/;
		
		this.boats = [];
		
		let board = new BoardClass(/*id*/0);

		let aircraft = new BoatClass("aircraft");
		this.boats.push(aircraft);
		
		let battleship = new BoatClass("battleship");
		this.boats.push(battleship);
		
		let cruiser1 = new BoatClass("cruiser");
		//this.boats.push(cruiser1);

		let cruiser2 = new BoatClass("cruiser");
		//this.boats.push(cruiser2);
		
		let destroyer1 = new BoatClass("destroyer");
		//this.boats.push(destroyer1);
				
		let destroyer2 = new BoatClass("destroyer");
		//this.boats.push(destroyer2);
		
		let destroyer3 = new BoatClass("destroyer");
		//this.boats.push(destroyer3);
		
		let submarine1 = new BoatClass("submarine");
		//this.boats.push(submarine1);
		
		let submarine2 = new BoatClass("submarine");
		//this.boats.push(submarine2);
		
		let submarine3 = new BoatClass("submarine");
		//this.boats.push(submarine3);
		
		let submarine4 = new BoatClass("submarine");
		//this.boats.push(submarine4);
		
		//board.addBoat(new CellClass(2,2), aircraft);

		this.randomAddBoats(board);

		console.table(board.getCells());
	}
	
	public getLabel(currentRow) {
		 return String.fromCharCode(65+currentRow);
	}

	public clickElemento(l,i){
		console.log(this.id+"-"+l+":"+i);
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
