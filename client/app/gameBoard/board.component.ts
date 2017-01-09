import { Component, Input, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { BoardClass} 		from "./boardClass";
import { BoatClass } 		from "./boatClass";
import { CellClass } 		from "./cellClass";

import { GameService, WebSocketService, MultiComponentService } from '../_services/index';

@Component({
	moduleId: module.id,
	selector: 'game-board',	
	templateUrl: 'board.component.html',
	styleUrls: ['./board.component.css'],
	providers: [GameService, MultiComponentService]
})

export class BoardComponent { 
	public id: number;
	public cells: CellClass[];
	private boats: BoatClass[];
	subscription: Subscription;
	flag: boolean;

	public elementos: number[] = [];
	
	public constructor(private wsService: WebSocketService, private gameService: GameService, private multiComponentService: MultiComponentService){
		/*this.id = 0;
		
		let board = new BoardClass();

		let aircraft = new BoatClass("aircraft");
		
		let battleship = new BoatClass("battleship");

		let cruiser1 = new BoatClass("cruiser");

		let cruiser2 = new BoatClass("cruiser");
		
		let destroyer1 = new BoatClass("destroyer"); */

		let board = new BoardClass();
		this.id = board.getId();
		this.gameService.addGame(board);
		this.flag=false;
		this.boats = this.gameService.getBoats();
		this.subscription = multiComponentService.boatPlacement$.subscribe((f : any) => this.flag = f);
			//console.log(this.flag);
		
		//board.addBoat(new CellClass(2,2), aircraft);

		//this.randomAddBoats(board);  // AS coment
		//console.table(board.getCells());

		//board.addBoat(new CellClass(2,2), aircraft);
	}

	ngOnInit() {
        this.elementos = [];
        this.wsService.getBoardMessages().subscribe((m:any) => {
        	this.elementos = m;
            console.log('Array com valores: ' + m);		
        });
    }

	clickElemento(index: number){
        this.wsService.sendClickElementMessage(index);
        console.log('Posição:' + index);
    }

    getColor(elemento: number){
        switch (elemento) {
            case 0: return 'lightgray';
            case 1: return 'blue';
            case 2: return 'red';
        }
        return 'white';
    }

	/* 
	public cellClick(l,i){
		if(this.flag==true){
			console.log("placing boat at:"+this.id+"-"+l+":"+i);
		}
		console.log(this.flag);
	}

	public getLabel(currentRow) {
		return String.fromCharCode(65+currentRow);
	} */

/*
	public randomAddBoats(board: BoardClass){
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

	// Gerar posições para 4 submarinos (ocupam 1 cell)
	public randomAddBoats(board: BoardClass) {
		let arrayIndexs = new Array(100);

		console.log('tam. array ' + arrayIndexs.length);
		for (let j = 0; j < 4; j++) {
			arrayIndexs[Math.floor(Math.random() * (99 - 0)) + 0] = 1;	
		}
		console.log('array com 4 subs: ');
		console.log(arrayIndexs); 
	} 
}