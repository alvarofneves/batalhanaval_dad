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

    constructor(private websocketService: WebSocketService){
    }

    // To use the WebSocket service is necessary to subscribe the observable
    ngOnInit() {
        this.websocketService.getChatMessages().subscribe((m:any) => this.chatChannel.push(<string>m));
        this.websocketService.getPlayersMessages().subscribe((m:any) => this.playersChannel.push(<string>m));
        this.websocketService.getNewGamesCreated().subscribe((m:any) => this.gameChannel.push(<string>m));
    }
}