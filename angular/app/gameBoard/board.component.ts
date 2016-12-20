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
	
	public id:number;
	
	public cells: CellClass[];
	
	public constructor(/*id*/){
		
		this.id = 0/*id*/;
		
		let board = new BoardClass(/*id*/0);

		let aircraft = new BoatClass("aircraft");
		
		let battleship = new BoatClass("battleship");

		let cruiser1 = new BoatClass("cruiser");

		let cruiser2 = new BoatClass("cruiser");
		
		let destroyer1 = new BoatClass("destroyer");

		let destroyer2 = new BoatClass("destroyer");

		let destroyer3 = new BoatClass("destroyer");
		
		let submarine1 = new BoatClass("submarine");

		let submarine2 = new BoatClass("submarine");

		let submarine3 = new BoatClass("submarine");

		let submarine4 = new BoatClass("submarine");
		
		board.addBoat(new CellClass(2,2), aircraft);
	}
	
	public getLabel(currentRow) {
		 return String.fromCharCode(65+currentRow);
	}

	public clickElemento(l,i){
		console.log(this.id+"-"+l+":"+i);
	}
}
