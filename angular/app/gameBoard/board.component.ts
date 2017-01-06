import { Component, Input, OnInit } from '@angular/core';

import { BoardClass} 		from "./boardClass";
import { BoatClass } 		from "./boatClass";
import { CellClass } 		from "./cellClass";
import { WebSocketService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'game-board',	
	templateUrl: 'board.component.html',
})

export class BoardComponent implements OnInit { 
	public id:number;
	public cells: CellClass[];
	public elementos: number[] = [];
	
	public constructor(private wsService: WebSocketService){
		this.id = 0;
		
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

	ngOnInit() {
        this.elementos = [];
        this.wsService.getBoardMessages().subscribe((m:any) => {
            console.log(m);
            this.elementos = m;
        });
    }
	
	clickElemento(index: number){
        this.wsService.sendClickElementMessage(index);
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

	public getLabel(currentRow) {
		return String.fromCharCode(65+currentRow);
	}
}
