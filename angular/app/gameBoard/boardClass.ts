import {CellClass} from "./cellClass";

export class BoardClass {

    private cells: CellClass[];

    public constructor() {

        this.cells = [];
        for (let line=1; line<=10; line++){
            for(let column=1; column<=10; column++){

                console.log("linha:"+line+"-column:"+column);
                this.cells.push(new CellClass(line, column));

            }
        }

        console.log(this.cells);
    }
}