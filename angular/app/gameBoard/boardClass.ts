import {CellClass} from "./cellClass";
import {BoatClass} from "./boatClass";

export class BoardClass {

    private id: any;

    private cells: CellClass[];
    
    public constructor() {

        this.receivingBoats = false;
        this.id = "Board"+new Date();
        this.cells = [];
        for (let line=1; line<=10; line++) {
            for(let column=1; column<=10; column++) {
                
                this.cells.push(new CellClass(line, column));
            }
        }
    }
    
    public addBoat(startingCell:CellClass, boat:BoatClass): number {

        let cellArr: CellClass[] = [];
        let protectedSea: CellClass[] = [];
        let boatLabel = "C";

        for(let cell of this.cells){
            if(cell.getValue()) {
                return -1;
            }
            for (let c of boat.getCells()) {

                if (cell.getLine() == startingCell.getLine() + c.getLine() &&
                    cell.getColumn() == startingCell.getColumn() + c.getColumn()) {

                    if (c.getValue() != "" && c.getValue() != "~") {
                        if (cell.getLine() >= 0 && cell.getLine() <= 9) {
                            if (cell.getColumn() >= 0 && cell.getColumn() <= 9) {

                                cellArr.push(cell);
                                boatLabel = c.getValue();
                            } else {
                                return -1;
                            }
                        } else {
                            return -1;
                        }
                    } else {
                        if (c.getValue() == "~") {
                            if (cell.getLine() >= 0 && cell.getLine() <= 9) {
                                if (cell.getColumn() >= 0 && cell.getColumn() <= 9) {
                                    protectedSea.push(cell);
                                }
                            }
                        }
                    }
                }

            }


        }
        for(let c of cellArr){
            c.setValue(boatLabel);
        }
        for(let c of protectedSea){
            c.setValue("~");
        }

        return 0;
    }

    getId(): any {
        
        return this.id;
    }

    public getCells(): CellClass[]{
        return this.cells;
    }
    
    public getReceivingBoats(): boolean{
        return this.receivingBoats;
    }
    
    public setReceivingBoats(status: boolean): void{
        this.receivingBoats = status;
    }
}

