import { Component } from '@angular/core';
import { Router }     from '@angular/router';

import { Player }                      from '../_shared/player';
import { AlertService, PlayerService } from '../_services/index';  

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
	//leaderboard: ListPlayers[];
    //list: Player[];

    public player: Player;

	//constructor() {
		//this.lustPlayersService.getList().subscribe((list) => this.list = list);
	//}

	//constructor(private playerService: PlayerService) {
        //this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
    //}

    //ngOnInit() {
        //this.loadAllPlayers();
    //}

    //deletePlayer(id: number) {
        //this.playerService.delete(id).subscribe(() => { this.loadAllPlayers() });
    //}

	constructor(private playerService: PlayerService, private alertService: AlertService, private router: Router) {

        //this.player = new Player("", "", ""); 

    }

    ngOnInit() {
        console.log("inicio de list");

        this.playerService.getAllPlayers()
        .subscribe(
            data => {
                console.log(data);
                this.alertService.success('ListPlayers successful', true);
            },
            error => {
                this.alertService.error(error);  
            });
       


    //listAllPlayers() {
      //  console.log("inicio de listagemkkkkkkk")
        //    this.playerService.getAllPlayers()
         //   .subscribe(
           //     data => {
             //       this.alertService.success('ListPlayers successful', true);
               // },
               // error => {
                 //   this.alertService.error(error);  
                //});
        //console.log("fim de listagem lkkkkl");
    }


    


}
