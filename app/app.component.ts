import { Component, Input } from '@angular/core';

@Component({
	selector: 'batalha-naval',
	// 
	templateUrl: './app/views/gameBoard.html',
	

	/*template: `
		<h1>{{title}}</h1>			
  		<h2>Batalha Naval "DAD"   h2</h2>
			<div class="dad-board">
				<div class="dad-row">
					<div><p class="coordenadas">A</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="0">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="0">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">B</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="1">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="1">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">C</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="2">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="2">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">D</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="3">
					</div>
					<div class="dad-cell">
					    <input data-column="5" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="3">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="3">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">E</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="4">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="4">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">F</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="5">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="5">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">G</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="6">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="6">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">H</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="7">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="7">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">I</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="8">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="8">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">J</p></div>
					<div class="dad-cell">
						<input data-column="0" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="1" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="2" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="3" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="4" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="5" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="6" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="7" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="8" data-line="9">
					</div>
					<div class="dad-cell">
						<input data-column="9" data-line="9">
					</div>
				</div>

				<div class="dad-row">
					<div><p class="coordenadas">1</p></div>
					<div><p class="coordenadas">2</p></div>
					<div><p class="coordenadas">3</p></div>
					<div><p class="coordenadas">4</p></div>
					<div><p class="coordenadas">5</p></div>
					<div><p class="coordenadas">6</p></div>
					<div><p class="coordenadas">7</p></div>
					<div><p class="coordenadas">8</p></div>
					<div><p class="coordenadas">9</p></div>
					<div><p class="coordenadas">10</p></div>
				</div>
			</div>
  		`*/
})

export class AppComponent { 
	@Input('batalha') title: string;
}
