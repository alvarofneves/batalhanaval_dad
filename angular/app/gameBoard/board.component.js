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
<<<<<<< HEAD
var multiComponent_service_1 = require("../_services/multiComponent.service");
var boardClass_1 = require("./boardClass");
var BoardComponent = (function () {
    function BoardComponent(gameService, multiComponentService /*id*/) {
        var _this = this;
        this.gameService = gameService;
        this.multiComponentService = multiComponentService; /*id*/
        var board = new boardClass_1.BoardClass();
        this.id = board.getId();
        this.gameService.addGame(board);
        this.flag = false;
        this.boats = this.gameService.getBoats();
        this.subscription = multiComponentService.boatPlacement$.subscribe(function (f) { return _this.flag = f; });
        console.log(this.flag);
        //board.addBoat(new CellClass(2,2), aircraft);
        //this.randomAddBoats(board);  // AS coment
        //console.table(board.getCells());
=======
var BoardComponent = (function () {
    function BoardComponent(wsService) {
        this.wsService = wsService;
        this.elementos = [];
        /*this.id = 0;
        
        let board = new BoardClass();

        let aircraft = new BoatClass("aircraft");
        
        let battleship = new BoatClass("battleship");

        let cruiser1 = new BoatClass("cruiser");

        let cruiser2 = new BoatClass("cruiser");
        
        let destroyer1 = new BoatClass("destroyer");

        let destroyer2 = new BoatClass("destroyer");

        let destroyer3 = new BoatClass("destroyer");
        
        let submarine1 = new BoatClass("submarine");

        let submarine2 = new BoatClass("submarine");

        let submarine3 = new BoatClass("submarine");

        let submarine4 = new BoatClass("submarine");
        
        board.addBoat(new CellClass(2,2), aircraft);*/
>>>>>>> websockets-tiros-v2
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementos = [];
        this.wsService.getBoardMessages().subscribe(function (m) {
            _this.elementos = m;
            console.log(m);
        });
    };
<<<<<<< HEAD
    BoardComponent.prototype.cellClick = function (l, i) {
        if (this.flag == true) {
            console.log("placing boat at:" + this.id + "-" + l + ":" + i);
        }
        console.log(this.flag);
=======
    BoardComponent.prototype.clickElemento = function (index) {
        this.wsService.sendClickElementMessage(index);
        console.log(index);
    };
    BoardComponent.prototype.getColor = function (elemento) {
        switch (elemento) {
            case 0: return 'lightgray';
            case 1: return 'blue';
            case 2: return 'red';
        }
        return 'white';
>>>>>>> websockets-tiros-v2
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'game-board',
        templateUrl: 'board.component.html',
<<<<<<< HEAD
        styleUrls: ['./board.component.css'],
        providers: [index_1.GameService, multiComponent_service_1.MultiComponentService]
    }),
    __metadata("design:paramtypes", [index_1.GameService, multiComponent_service_1.MultiComponentService /*id*/])
=======
        styleUrls: ['./board.component.css']
    }),
    __metadata("design:paramtypes", [index_1.WebSocketService])
>>>>>>> websockets-tiros-v2
], BoardComponent);
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map