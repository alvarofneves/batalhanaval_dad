import { Component, OnInit } from '@angular/core';
import { WebSocketService }  from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'notifications-panel',
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent implements OnInit {
    playersChannel: string[] = [];
    chatChannel: string[] = [];
    gameChannel: string[] = [];

    constructor(private wsService: WebSocketService){
    }

    // To use the WebSocket service is necessary to subscribe the observable
    ngOnInit() {
        // NOTA: por à escuta também no HTML 
        this.wsService.getChatMessages().subscribe((m:any) => this.chatChannel.push(<string>m));
        this.wsService.getPlayersMessages().subscribe((m:any) => this.playersChannel.push(<string>m));
        this.wsService.getNewGamesCreated().subscribe((m:any) => this.gameChannel.push(<string>m));
    }
}