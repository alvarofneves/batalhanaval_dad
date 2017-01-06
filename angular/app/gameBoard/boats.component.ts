import { Component, OnDestroy } from '@angular/core';
//import {GameService} from "../_services/game.service";
import {GameService} from "../_services/index";
import {MultiComponentService} from "../_services/multiComponent.service";


@Component({
    moduleId: module.id,
    selector: 'boats-container',
    templateUrl: 'boats.component.html',
    providers: [GameService, MultiComponentService]
})

export class BoatsComponent {

    private boats: Array<any> = [];
    private counters: Array<number> = [];

    constructor(private gameService: GameService, private multiComponentService: MultiComponentService) {
        this.boats = ["Aircraft", "Battleship", "Cruiser", "Destroyer", "Submarine"];
        this.counters = [1, 1, 2, 3, 4];
    }
    public prepareBoat(boat, i) {

        if(this.counters[i] > 0){
            this.multiComponentService.boatPrepared(true);
            console.log("Clicked Boat: " + boat + " Quantity available: " + this.counters[i]);
            this.counters[i]--;
        }else{
            console.log("No " + boat + "s available!");
        }

    }

}

