import { Injectable } from '@angular/core';

import { Player } 	  from '../_shared/index';

@Injectable()
export class SettingsService {
	authenticated: boolean;
	currentPlayer: Player;

    constructor() { 
    	this.authenticated = false;
    	this.currentPlayer = null;
    }
}