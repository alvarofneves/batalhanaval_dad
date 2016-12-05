import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cell-board',	
	templateUrl: 'cell.component.html',
})

export class CellComponent { 
	@Input() column:number
	@Input() line:number
}