import {CellClass} from "./cellClass";
import {BoatClass} from "./boatClass";

export class BoardClass {
    private id: number;
    private cells: CellClass[];

    public constructor(numBoards) {
        this.id = numBoards;
        this.cells = [];
        for (let line=1; line<=10; line++) {
            for(let column=1; column<=10; column++) {
                
                this.cells.push(new CellClass(line, column));
            }
        }
    }
    
    public addBoat(startingCell:CellClass, boat:BoatClass) {
        for(let cell of this.cells){
            for(let c of boat.getCells()){
                if (cell.getLine() == startingCell.getLine()+c.getLine() &&
                    cell.getColumn() == startingCell.getColumn()+c.getColumn()) {
                    cell.setValue(c.getValue());
                }
            }
        }
    }

    getId() {
        return this.id;
    }
}
