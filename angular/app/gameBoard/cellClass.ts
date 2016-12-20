

export class CellClass {

    private line: number;
    
    private column: number;

    private value: string;
    
    
    public constructor(line, column) {

        this.line = line;

        this.column = column;
        
        this.value = "";
    }

    public setValue(value) {
        this.value = value;
    }
    
    public getValue(){
        return this.value;
    }
    
    public getLine(){
        return this.line;
    }

    public getColumn(){
        return this.column;
    }

    
}