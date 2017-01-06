import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'init-game-controls',
    templateUrl: 'controls.component.html'
})

export class InitGameControlsComponent { 
	// TODO limpar peças do array e apagar do board
	resetBoard() {
		console.log('reset....');
	}

	// TODO início ao jogo
	startGame() {
		console.log('start....');
	}
}