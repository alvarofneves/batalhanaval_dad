import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Player } from './player';

@Component({
  selector: 'player-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ player.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Email</div>
      <div class="col-xs-9 pull-left">{{ player.email }}</div>
    </div>
    <br>
    <!--<button class="btn btn-default" (click)="onClick()">Edit</button>-->
  </div>`
})
export class SubmittedComponent {
  @Input()  player: Player;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }
}

