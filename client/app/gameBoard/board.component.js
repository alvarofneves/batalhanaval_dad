"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var BoardComponent = (function () {
    function BoardComponent(wsService, gameService, multiComponentService) {
        /*this.id = 0;
        
        let board = new BoardClass();

        let aircraft = new BoatClass("aircraft");
        
        let battleship = new BoatClass("battleship");

        let cruiser1 = new BoatClass("cruiser");

        let cruiser2 = new BoatClass("cruiser");
        
        let destroyer1 = new BoatClass("destroyer");

        let board = new BoardClass();
        this.id = board.getId();
        this.gameService.addGame(board);
        this.flag=false;
        this.boats = this.gameService.getBoats();
        this.subscription = multiComponentService.boatPlacement$.subscribe((f : any) => this.flag = f);
        console.log(this.flag); */
        this.wsService = wsService;
        this.gameService = gameService;
        this.multiComponentService = multiComponentService;
        this.elementos = [];
        //board.addBoat(new CellClass(2,2), aircraft);
        //this.randomAddBoats(board);  // AS coment
        //console.table(board.getCells());
        //board.addBoat(new CellClass(2,2), aircraft);
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementos = [];
        this.wsService.getBoardMessages().subscribe(function (m) {
            _this.elementos = m;
            console.log('Array com valores: ' + m);
        });
    };
    BoardComponent.prototype.clickElemento = function (index) {
        this.wsService.sendClickElementMessage(index);
        console.log('Posição:' + index);
        //this.game. 
    };
    BoardComponent.prototype.getColor = function (elemento) {
        switch (elemento) {
            case 0: return 'ffffff'; // lightgray
            case 1: return '#4286f4'; //blue   #ccf5ff
            case 2: return 'red';
        }
        return 'white';
    };
    /* public cellClick(l,i){
        if(this.flag==true){
            console.log("placing boat at:"+this.id+"-"+l+":"+i);
        }
        console.log(this.flag);
    }

    public getLabel(currentRow) {
        return String.fromCharCode(65+currentRow);
    } */
    /* public randomAddBoats(board: BoardClass){
        let randomCoord = 0;
        let result = 0;
        
        for(let boat of this.boats){
            do {
                randomCoord = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
                console.log("random:"+randomCoord);

                result = board.addBoat(board.getCells()[randomCoord], boat)
                console.log("result:"+result);
            }while (result == -1)
        }
    } */
    // Gerar posições para 4 submarinos (ocupam 1 cell); Passou a ser usado no lobby.comp
    BoardComponent.prototype.randomAddBoats = function (board) {
        var arrayIndexs = new Array(100);
        console.log('tam. array ' + arrayIndexs.length);
        for (var j = 0; j < 4; j++) {
            arrayIndexs[Math.floor(Math.random() * (99 - 0)) + 0] = 1;
        }
        console.log('array com 4 subs: ');
        console.log(arrayIndexs);
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game-board',
        templateUrl: 'board.component.html',
        styleUrls: ['./board.component.css'],
        providers: [index_1.GameService, index_1.MultiComponentService]
    }),
    __metadata("design:paramtypes", [index_1.WebSocketService, index_1.GameService, index_1.MultiComponentService])
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map