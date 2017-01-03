import {CellClass} from "./cellClass";
export class BoatClass {

    private name: string;

    private cellValue: string;

    private cells: CellClass[];

    public constructor(name) {

        this.name = name;
        this.cells = [];
        for (let line=0; line<6; line++){
            for(let column=0; column<6; column++){

                this.cells.push(new CellClass(line, column));

            }
        }

        let protectedSea = "~";

        switch (name.toUpperCase()){
            case "AIRCRAFT":
                this.cellValue="P";
                for(let cell of this.cells){
                    for(let i = 0; i<3; i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    for(let j = 1; j<4; j++){
                        if(cell.getLine() == j && cell.getColumn() == 0){
                            cell.setValue(protectedSea);
                        } 
                    }
                    for(let j = 1; j<4; j++){
                        if(cell.getLine() == j && cell.getColumn() == 1){
                            cell.setValue(this.cellValue);
                        } 
                    }
                    for(let i = 2; i<5; i++){
                        if(cell.getLine() == 1 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                    
                    for(let i = 1; i<4; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    if(cell.getLine() == 2 && cell.getColumn() == 4){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 2; i<5; i++){
                        if(cell.getLine() == 3 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                    for(let i = 0; i<3; i++){
                        if(cell.getLine() == 4 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                }
            break;

            case "BATTLESHIP":
                this.cellValue = "N";
                for(let cell of this.cells){
                    for(let i = 0; i<6 ; i++){
                        if(cell.getLine() == 0 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 0){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 1; i<5; i++) {
                        if (cell.getLine() == 1 && cell.getColumn() == i) {
                            cell.setValue(this.cellValue);
                        }
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 5){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 0; i<6; i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                }
            break;

            case "CRUISER":
                this.cellValue = "N";
                for(let cell of this.cells){
                    for(let i = 0; i<5;i++) {
                        if (cell.getLine() == 0 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 0){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 1; i<4; i++){
                        if(cell.getLine() == 1 && cell.getColumn() == i){
                            cell.setValue(this.cellValue);
                        } 
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 4){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 0; i<5;i++) {
                        if (cell.getLine() == 2 && cell.getColumn() == i) {
                            cell.setValue(protectedSea);
                        }
                    }
                    
                }
            break;

            case "DESTROYER":
                this.cellValue = "N";
                for(let cell of this.cells){
                    for(let i = 0; i<4; i++){
                        if(cell.getLine() == 0 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 0){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 1; i<3; i++){
                        if(cell.getLine() == 1 && cell.getColumn() == i){
                            cell.setValue(this.cellValue);
                        }
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 3){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 0; i<4; i++){
                        if(cell.getLine() == 2 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                }
            break;

            case "SUBMARINE":
                this.cellValue = "N";
                for(let cell of this.cells){
                    for(let i = 0; i<3; i++){
                        if(cell.getLine() == 0 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 0){
                        cell.setValue(protectedSea);
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 1){
                        cell.setValue(this.cellValue);
                    }
                    if(cell.getLine() == 1 && cell.getColumn() == 2){
                        cell.setValue(protectedSea);
                    }
                    for(let i = 0; i<3; i++){
                        if(cell.getLine() == 2 && cell.getColumn() == i){
                            cell.setValue(protectedSea);
                        }
                    }
                }
            break;
        }
    }

    public getCells(){
        return this.cells;
    }
    
    public getName(){
        return this.name;
    }


}
