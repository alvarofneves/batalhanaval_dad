import {CellClass} from "./cellClass";

export class BoatClass {
    private name: string;
    private cellValue: string;
    private cells: CellClass[];

    public constructor(name) {
        this.name = name;
        this.cells = [];
        for (let line=0; line<4; line++){
            for(let column=0; column<4; column++){

                this.cells.push(new CellClass(line, column));

            }
        }


        switch (name.toUpperCase()){
            case "AIRCRAFT":
                this.cellValue="P";
                for(let cell of this.cells){
                    if(cell.getLine() == 0 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 1){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 2){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 2 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }

                }
            break;

            case "BATTLESHIP":
                this.cellValue = "N";
                for(let cell of this.cells){
                    if(cell.getLine() == 0 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 0 && cell.getColumn() == 1){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 0 && cell.getColumn() == 2){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 0 && cell.getColumn() == 3){
                        cell.setValue(this.cellValue);
                    }


                }
            break;

            case "CRUISER":
                this.cellValue = "N";
                for(let cell of this.cells){
                    if(cell.getLine() == 0 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 0 && cell.getColumn() == 1){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 0 && cell.getColumn() == 2){
                        cell.setValue(this.cellValue);
                    }
                }
            break;

            case "DESTROYER":
                this.cellValue = "N";
                for(let cell of this.cells){
                    if(cell.getLine() == 0 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 0 && cell.getColumn() == 1){
                        cell.setValue(this.cellValue);
                    }
                }
            break;

            case "SUBMARINE":
                this.cellValue = "N";
                for(let cell of this.cells){
                    if(cell.getLine() == 0 && cell.getColumn() == 0){
                        cell.setValue(this.cellValue);
                    }
                }
            break;
        }
    }

    public getCells(){
        return this.cells;
    }


}