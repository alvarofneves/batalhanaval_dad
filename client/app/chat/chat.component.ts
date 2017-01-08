import { Component } 		from '@angular/core';
import { WebSocketService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: 'chat.component.html'
})

export class ChatComponent {
    message: string;

    constructor(private websocketService: WebSocketService) {}
    send(): void {
        this.websocketService.sendChatMessage(this.message);
        this.message = '';
    }
}