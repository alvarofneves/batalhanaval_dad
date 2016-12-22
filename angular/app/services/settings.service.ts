import { Injectable } from '@angular/core';

import { Player } from '../shared/player';

@Injectable()
export class SettingsService {
	currentPlayer: Player;
	authenticated: boolean;

    constructor() { 
    	this.currentPlayer = null;
    	this.authenticated = false;
    }
}