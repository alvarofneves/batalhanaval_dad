import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './websocket.service';

@Component({
    moduleId: module.id,
    selector: 'notifications-panel',
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent implements OnInit {
    playersChannel: string[] = [];
    chatChannel: string[] = [];

    constructor(private websocketService: WebSocketService){
    }

    ngOnInit() {
        this.websocketService.getChatMessages().subscribe((m:any) => this.chatChannel.push(<string>m));
        this.websocketService.getPlayersMessages().subscribe((m:any) => this.playersChannel.push(<string>m));
    }
}