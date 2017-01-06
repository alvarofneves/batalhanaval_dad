import { Injectable }                              from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {BoardClass} from "./../gameBoard/boardClass";
import {BOARDS} from "./../gameBoard/mock-boards";
import {BOATS} from "./../gameBoard/mock-boats";
import { Game }       from '../_shared/index';
import { Observable } from 'rxjs/Rx';
import {BoatClass} from "../gameBoard/boatClass";

@Injectable()
export class GameService {
    constructor(private http: Http) {    }

    newGame(game: Game): Observable<any> {
        console.log(game);
        return this.http.post('/api/games', game).map(r=> r.json());
    }

    getAllGames() {
        return this.http.get('/api/games').map((response: Response) => response.json());
    }

    getGamesByStatus(status: String) {
        return this.http.get('/api/gamesSearch/' + status).map((response: Response) => response.json());
    }

    getGamesByCreator(idPlayer: Number) {
        return this.http.get('/api/games').map((response: Response) => response.json());
    }

    getBoards(): BoardClass[] {
        return BOARDS;
    }

    addGame(board: BoardClass): void {
        BOARDS.push(board);
    }

    addBoatToBoard(boardID: number, boat: string): void {

        //BOARDS[boardID].addBoat(boat);
    }

    getBoats(): BoatClass[] {
        return BOATS;
    }
}
